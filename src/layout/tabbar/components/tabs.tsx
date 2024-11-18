import type { DragEndEvent } from '@dnd-kit/core'
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons'
import { closestCenter, DndContext, PointerSensor, useSensor } from '@dnd-kit/core'
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Icon } from '@iconify/react'
import { Tabs, theme } from 'antd'
import React, { useState } from 'react'

interface DraggableTabPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  'data-node-key': string
}

function DraggableTabNode({ className, ...props }: DraggableTabPaneProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props['data-node-key'],
  })

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    cursor: 'move',
  }

  return React.cloneElement(props.children as React.ReactElement, {
    ref: setNodeRef,
    style,
    ...attributes,
    ...listeners,
  })
}
type TargetKey = React.MouseEvent | React.KeyboardEvent | string
export default function Tab() {
  const {
    token: { controlItemBgActive },
  } = theme.useToken()

  const [items, setItems] = useState([
    {
      key: '1',
      label: 'Tab 1',
      closable: true,
    },
    {
      key: '2',
      label: 'Tab 2',
      closable: true,
    },
    {
      key: '3',
      label: 'Tab 3',
      closable: true,
    },
  ])
  const [activeKey, setActiveKey] = useState(items[0].key)

  const sensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setItems((prev) => {
        const activeIndex = prev.findIndex(i => i.key === active.id)
        const overIndex = prev.findIndex(i => i.key === over?.id)
        return arrayMove(prev, activeIndex, overIndex)
      })
    }
  }
  const onChange = (key: string) => {
    // const newitems = items.map((item) => {
    //   if (item.key === key) {
    //     item.closable = false
    //   }
    //   else {
    //     item.closable = true
    //   }
    //   return item
    // })
    // setItems(newitems)
    setActiveKey(key)
  }
  const remove = (targetKey: TargetKey) => {
    const targetIndex = items.findIndex(pane => pane.key === targetKey)
    const newPanes = items.filter(pane => pane.key !== targetKey)
    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex]
      setActiveKey(key)
    }
    setItems(newPanes)
  }
  const onEdit = (targetKey: TargetKey) => {
    remove(targetKey)
  }
  return (
    <Tabs
      items={items}
      hideAdd
      type="editable-card"
      activeKey={activeKey}
      onChange={onChange}
      className=" paperclip-tabs before:border-none"
      onEdit={onEdit}
      animated={{ inkBar: true, tabPane: true }}
      style={{
        '--paperclip-bg-activecolor': controlItemBgActive,
      }}
      renderTabBar={(tabBarProps, DefaultTabBar) => (
        <DndContext sensors={[sensor]} onDragEnd={onDragEnd} collisionDetection={closestCenter}>
          <SortableContext items={items.map(i => i.key)} strategy={horizontalListSortingStrategy}>
            <DefaultTabBar {...tabBarProps}>
              {node => (
                <DraggableTabNode {...node.props} key={node.key}>
                  {node}
                </DraggableTabNode>
              )}
            </DefaultTabBar>
          </SortableContext>
        </DndContext>
      )}
    />
  )
}
