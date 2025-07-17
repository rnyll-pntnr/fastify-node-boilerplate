import { FastifyReply, FastifyRequest } from 'fastify'
import admin from '../config/firebase.config'

export const submitLogin = async (
  request: FastifyRequest<{ Body: { uid: string } }>,
  reply: FastifyReply,
) => {
  const { uid } = request.body // Assuming you get a UID from the request body
  if (!uid) {
    reply.code(400).send({ message: 'UID is required.' })
  }

  try {
    const customToken = await admin.auth().createCustomToken(uid)
    reply.status(200).send({ token: customToken })
  } catch (error: any) {
    reply
      .code(500)
      .send({ message: 'Error creating custom token.', error: error.message })
  }
}
