import { Login } from '../pages/login'

const routesArr = [
  {
    path: '/login',
    component: Login,
  },
]
export interface RouteType {
  path: string
  component: React.FC
  children?: RouteType[]
}
export default routesArr
