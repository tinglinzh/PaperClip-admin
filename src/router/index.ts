// import Login from '@/pages/login'
import React from 'react'

// 导入创建路由的函数
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    Component: React.lazy(() => import('@/layout/index')),
  },
  {
    path: '/login',
    Component: React.lazy(() => import('@/pages/login/index')),
  },
])

export default router
