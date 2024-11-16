import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './modules/theme' // 导入 reducer
// 创建 Redux store
const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware(), // 使用默认的中间件
  // devTools: process.env.NODE_ENV !== 'production', // 在开发环境启用 Redux DevTools
})

export default store
export type RootState = ReturnType<typeof store.getState>
