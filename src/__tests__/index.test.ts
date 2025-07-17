import { afterAll, expect, test } from '@jest/globals'
import request from 'supertest'
import app from '../'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('GET `/health` route', async () => {
  const response = await request(app.server).get('/health')
  expect(response.statusCode).toBe(200)
})
