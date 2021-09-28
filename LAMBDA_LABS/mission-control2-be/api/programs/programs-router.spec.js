const request = require('supertest')
const server = require('../server')

describe('programs router', () => {
  it('should return 200 OK status', async () => {
    const response = await request(server).get('/api/programs')
    expect(response.status).toBe(200)
  })
  it('should return JSON', async () => {
    const response = await request(server).get('/api/programs')
    expect(response.type).toMatch(/json/i)
  })
  it('should respond with an array of programs', async () => {
    const response = await request(server).get('/api/programs')
    expect(Array.isArray(response.body)).toBe(true)
  })
})
