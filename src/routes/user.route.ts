import { FastifyInstance } from 'fastify'
import * as userController from '../controllers/user.controller'

const swaggerSchema = {
  schema: {
    tags: ['User'],
  },
}

export const route = (
  fastify: FastifyInstance,
  opts: any,
  next: (err?: Error) => void,
) => {
  fastify.get(
    '/',
    {
      ...swaggerSchema,
    },
    userController.getAllUsers,
  )

  fastify.get(
    '/:id',
    {
      ...swaggerSchema,
    },
    userController.getUser,
  )
  next()
}
