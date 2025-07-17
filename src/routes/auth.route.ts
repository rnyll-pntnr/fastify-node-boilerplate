import { FastifyInstance } from 'fastify'
import * as authController from '../controllers/auth.controller'

export const route = (
  fastify: FastifyInstance,
  opts: any,
  next: (err?: Error) => void,
) => {
  fastify.post('/login', authController.submitLogin)
  next()
}
