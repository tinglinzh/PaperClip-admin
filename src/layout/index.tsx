import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Icon } from '@iconify/react'
import { Button, Layout, Menu, theme } from 'antd'
import React, { useState } from 'react'
import SideTop from './components/side/sideTop'

const { Header, Sider, Content } = Layout

const HomeLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className="shadow-[2px_0_8px_0_rgb(29,35,41,0.05);]">
        <SideTop collapsed={collapsed} />
        <Menu
          mode="inline"
          className="!border-none"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ background: colorBgContainer }} className="flex items-center px-6">
          <Button
            type="text"
            icon={collapsed
              ? (
                  <Icon icon="line-md:menu-fold-right" key="menu-fold-right" />
                )
              : (
                  <Icon icon="line-md:menu-fold-left" key="menu-fold-left" />
                )}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: `var(--paperclip-header-icon-size)`,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}

export default HomeLayout
