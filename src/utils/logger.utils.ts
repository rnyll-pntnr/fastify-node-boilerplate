export const logger = {
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'HH:MM:ss Z',
    },
  },
  base: {
    pid: false,
  },
  serializers: {
    res(reply: any) {
      return {
        statusCode: reply.statusCode,
      }
    },
    req(request: any) {
      return {
        method: request.method,
        url: request.url,
        path: request.path,
      }
    },
  },
}
