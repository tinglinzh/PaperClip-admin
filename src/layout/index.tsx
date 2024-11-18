import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import PaperclipHeader from './header'
import SideTop from './side/components/sideTop'
import PaperclipTabbar from './tabbar/index'

const { Sider, Content } = Layout

const HomeLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
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
        <PaperclipHeader collapsed={collapsed} setCollapsed={toggleCollapsed} />
        <PaperclipTabbar />
        <Content
          style={{
            padding: 24,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}

export default HomeLayout
