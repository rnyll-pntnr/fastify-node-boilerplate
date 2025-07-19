import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import fp from 'fastify-plugin'
import { FirebaseError } from 'firebase-admin/app'
import { DecodedIdToken } from 'firebase-admin/auth'
import admin from '../config/firebase.config'

declare module 'fastify' {
  interface FastifyRequest {
    user?: DecodedIdToken
  }
}

const AuthPlugin = async (fastify: FastifyInstance, opts: any) => {
  fastify.addHook(
    'preHandler',
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        if (
          (request.url && request.url.startsWith('/docs')) ||
          request.url === '/health'
        ) {
          return
        }
        const authHeader = request.headers.authorization

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
          reply.code(401).send({ message: 'No authorization token provided.' })
          return
        }

        const idToken = authHeader.split('Bearer ')[1]

        const decodedToken = await admin.auth().verifyIdToken(idToken)
        fastify.log.info(decodedToken)
        request.user = decodedToken // Attach the decoded user data to the request object
      } catch (error) {
        const firebaseError = error as FirebaseError
        if (firebaseError.code === 'auth/id-token-expired') {
          reply
            .code(401)
            .send({ message: 'ID token expired.', code: 'ID_TOKEN_EXPIRED' })
        } else if (firebaseError.code === 'auth/argument-error') {
          reply
            .code(401)
            .send({ message: 'Invalid ID token.', code: 'INVALID_ID_TOKEN' })
        } else {
          reply.code(500).send({
            message: 'Authentication failed.',
            error: firebaseError.message,
          })
        }
      }
    },
  )
}

export default fp(AuthPlugin)
