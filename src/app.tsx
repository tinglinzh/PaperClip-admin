import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import router from './router'

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: `-apple-system,'paperclip-PingFang',BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}
