const request = require('supertest')
const server = require('../server')

describe('projects router', () => {
  it('should return 200 OK status', async () => {
    const response = await request(server).get('/api/projects')
    expect(response.status).toBe(200)
  })
  it('should return JSON', async () => {
    const response = await request(server).get('/api/projects')
    expect(response.type).toMatch(/json/i)
  })
  it('should respond with an array of projects', async () => {
    const response = await request(server).get('/api/projects')
    expect(Array.isArray(response.body)).toBe(true)
  })
})
