import type { MenuProps } from 'antd'
import { Icon } from '@iconify/react'
import { Button, Dropdown } from 'antd'

export default function ToggleTab() {
  const items: MenuProps['items'] = [{
    key: 'other',
    label: '关闭其它',
  }, {
    key: 'all',
    label: '关闭全部',
  }]
  return (
    <Dropdown
      placement="bottom"
      menu={{
        items,
        onClick: ({ key }) => {
          console.log(key)
        },
      }}
    >
      <Button
        type="text"
        style={{
          fontSize: `var(--paperclip-header-icon-size)`,
        }}
        icon={<Icon icon="line-md:close-circle" />}
      />
    </Dropdown>
  )
}
