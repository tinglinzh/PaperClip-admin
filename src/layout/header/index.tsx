import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Icon } from '@iconify/react'
import { Breadcrumb, Button, theme } from 'antd'
import { Header } from 'antd/es/layout/layout'
import HeaderRight from './components/right'

interface PaperclipHeaderProps {
  collapsed: boolean
  setCollapsed: () => void // 回调函数类型，更新collapsed状态

}
export default function PaperclipHeader({ collapsed, setCollapsed }: PaperclipHeaderProps) {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Header style={{ background: colorBgContainer }} className="flex items-center px-6 ">
      <Button
        type="text"
        icon={collapsed
          ? (
              <Icon icon="line-md:menu-fold-right" key="menu-fold-right" />
            )
          : (
              <Icon icon="line-md:menu-fold-left" key="menu-fold-left" />
            )}
        onClick={setCollapsed}
        style={{
          fontSize: `var(--paperclip-header-icon-size)`,
        }}
      />
      <Breadcrumb
        className="ml-6"
        items={[
          {
            href: '',
            title: <HomeOutlined />,
          },
          {
            href: '',
            title: (
              <>
                <UserOutlined />
                <span>Application List</span>
              </>
            ),
          },
          {
            title: 'Application',
          },
        ]}
      />
      <HeaderRight />
    </Header>
  )
}
