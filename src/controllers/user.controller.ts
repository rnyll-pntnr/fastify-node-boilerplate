import { FastifyReply, FastifyRequest, RouteHandlerMethod } from 'fastify'
import User from '../models/user.model'

export const getAllUsers: RouteHandlerMethod = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const users = await User.find()
  reply.send({
    success: true,
    data: users.map((user) => user.toJSON()),
    message: 'Users fetched successfully',
  })
}

export const getUser = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply,
) => {
  const { id } = request.params

  reply.send({
    success: true,
    data: {},
    message: 'User fetched successfully',
    paramId: id,
  })
}
