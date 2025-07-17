import { FastifyInstance } from 'fastify/types/instance'
import mongoose from 'mongoose'

export const connect = async (app: FastifyInstance) => {
  return await mongoose
    .connect(`${process.env.DB_STRING}/${process.env.DB_COLLECTION_NAME}`, {
      authSource: 'admin',
      user: `${process.env.DB_USERNAME}`,
      pass: `${process.env.DB_PASSWORD}`,
    })
    .then(() => {
      app.log.info(`DB Connected Successfully!`)
    })
    .catch((err) => {
      app.log.info(`Failed to connect to DB: ${err.message}`)
      process.exit(1)
    })
}
