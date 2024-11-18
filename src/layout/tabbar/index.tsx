import { Icon } from '@iconify/react'
import { Button } from 'antd'
import Tab from './components/tabs'
import ToggleTab from './components/toggleTab'

export default function PaperclipTabbar() {
  return (
    <div className="flex items-center justify-between bg-white px-6 shadow-[0_-1px_2px_rgb(0,21,41,0.08);]">
      <div className="flex-1">
        <Tab />
      </div>
      <div>
        <Button
          type="text"
          icon={(<Icon icon="cuida:refresh-outline" />)}
          style={{
            fontSize: `var(--paperclip-header-icon-size)`,
          }}
        />
        <ToggleTab />
      </div>
    </div>
  )
}
