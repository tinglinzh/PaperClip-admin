import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import router from './router'

const theme = {
  token: {
    fontFamily: `-apple-system,'paperclip-PingFang',BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
  },
  components: {
    Layout: {
      siderBg: '#fff',
      lightSiderBg: '#fff',
    },
    menu: {
      itemBg: '#fff',
      darkItemBg: '#fff',
      activeBarBorderWidth: '0',
    },
  },
}
export default function App() {
  return (
    <ConfigProvider
      theme={theme}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}
