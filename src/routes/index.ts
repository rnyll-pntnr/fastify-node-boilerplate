import { route as authRoute } from './auth.route'
import { route as userRoute } from './user.route'

const basePath = 'v1/api'

export const defaultRoutes = [
  {
    path: `${basePath}/auth`,
    route: authRoute,
  },
  {
    path: `${basePath}/user`,
    route: userRoute,
  },
]
