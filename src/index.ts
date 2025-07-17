import 'dotenv/config'
import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { connect } from './config/database.config'
import { defaultRoutes } from './routes'
import { logger } from './utils/logger.utils'

const app: FastifyInstance = Fastify({
  logger: logger,
})

app.register(import('@fastify/swagger'))
app.register(import('@fastify/swagger-ui'), {
  routePrefix: '/docs',
  uiHooks: {
    onRequest: function (request, reply, next) {
      next()
    },
    preHandler: function (request, reply, next) {
      next()
    },
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject, request, reply) => {
    return swaggerObject
  },
  transformSpecificationClone: true,
})

app.get('/health', (request: FastifyRequest, reply: FastifyReply) => {
  reply.send({ status: 'OK' }).status(200)
})

defaultRoutes.forEach((route) => {
  app.register(route.route, { prefix: route.path })
})

app.register(async () => {
  await connect(app)
})

app.listen({ port: parseInt(process.env.PORT || '3000') }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  app.log.info(`Server started: ${address}`)
})
export default app
