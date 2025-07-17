import { route as userRoute } from './user.route'

const basePath = 'v1/api'

export const defaultRoutes = [
  {
    path: `${basePath}/user`,
    route: userRoute,
  },
]
