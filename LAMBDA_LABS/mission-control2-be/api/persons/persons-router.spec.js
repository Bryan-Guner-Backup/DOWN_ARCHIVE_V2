const request = require('supertest')
const server = require('../server')

describe('persons router', () => {
  it('should return 200 OK status', async () => {
    const response = await request(server).get('/api/persons')
    expect(response.status).toBe(200)
  })
  it('should return JSON', async () => {
    const response = await request(server).get('/api/persons')
    expect(response.type).toMatch(/json/i)
  })
  it('should respond with an array of persons', async () => {
    const response = await request(server).get('/api/persons')
    expect(Array.isArray(response.body)).toBe(true)
  })
})
