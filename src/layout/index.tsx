import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import React, { useState } from 'react'
import PaperClipHeader from './header'
import SideTop from './side/components/sideTop'

const { Sider, Content } = Layout

const HomeLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout>
      <Sider trigger={null} theme="light" collapsible collapsed={collapsed} className="shadow-[2px_0_8px_0_rgb(29,35,41,0.05);]">
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
        <PaperClipHeader collapsed={collapsed} setCollapsed={toggleCollapsed} />
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
