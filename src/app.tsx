import type { ThemeConfig } from 'antd'
import type { RootState } from './stores/store'
import { ConfigProvider, theme } from 'antd'
import { useSelector } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './router'

const systemTheme: ThemeConfig = {
  token: {
    colorPrimary: '#6560FE',
    fontFamily: `-apple-system,'paperclip-PingFang',BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
  },
  components: {
    Layout: {
      headerHeight: 56,
    },
    Menu: {
      activeBarBorderWidth: '0',
    },
    Button: {
      onlyIconSize: 20,
    },
  },
}
export default function App() {
  const themeState = useSelector((state: RootState) => state.theme)
  return (
    <ConfigProvider
      theme={{
        ...systemTheme,
        algorithm: themeState.theme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}
