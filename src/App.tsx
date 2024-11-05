import type { RouteType } from './router/routes'
import { Route, Routes } from 'react-router-dom'
import routesArr from './router/routes'

function renderRoutes(routes: RouteType[]) {
  return routes.map((route, index) => {
    if (route.children) {
      // 如果有子路由，递归渲染子路由
      return (
        <Route path={route.path} element={<route.component />} key={index}>
          {renderRoutes(route.children)}
        </Route>
      )
    }
    return <Route path={route.path} element={<route.component />} key={index} />
  })
}
function App() {
  return (
    <Routes>
      {renderRoutes(routesArr)}
    </Routes>
  )
}

export default App
