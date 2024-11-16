import type { RootState } from '@/stores/store'
import { setTheme } from '@/stores/modules/theme'
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'
import { Icon } from '@iconify/react'
import { useFullscreen } from 'ahooks'
import { Button } from 'antd'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SwitchLanguage from './switchLanguage'

export default function HeaderRight() {
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.getElementById('root'))
  const dispatch = useDispatch()
  const themeState = useSelector((state: RootState) => state.theme)
  const [colorTheme, setColorTheme] = useState(themeState.theme)
  const handleToggleTheme = () => {
    setColorTheme(colorTheme === 'dark' ? 'light' : 'dark')
    dispatch(setTheme(colorTheme))
  }

  return (
    <div className="ml-auto flex items-center gap-4 pr-4">
      <Button
        type="text"
        onClick={toggleFullscreen}
        icon={
          isFullscreen ? (<FullscreenExitOutlined />) : (<FullscreenOutlined />)
        }
      />
      <SwitchLanguage />
      <Button
        type="text"
        onClick={handleToggleTheme}
        icon={(<Icon icon={colorTheme === 'dark' ? 'line-md:moon-to-sunny-outline-loop-transition' : 'line-md:sunny-outline-to-moon-loop-transition'} className="anticon" key={colorTheme} />)}
      />
    </div>
  )
}
