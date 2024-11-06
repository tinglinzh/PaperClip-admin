import { Login } from '../pages/login'
// 导入创建路由的函数
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([{
  path: '/login',
  Component: Login,
}])

export default router
