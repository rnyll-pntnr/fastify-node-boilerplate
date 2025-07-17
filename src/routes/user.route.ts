import { FastifyInstance } from 'fastify'
import * as userController from '../controllers/user.controller'

export const route = (
  fastify: FastifyInstance,
  opts: any,
  next: (err?: Error) => void,
) => {
  fastify.get('/', userController.getAllUsers)

  fastify.get('/:id/get', userController.getUser)
  next()
}
