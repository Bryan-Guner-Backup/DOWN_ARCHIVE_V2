const request = require('supertest')
const server = require('./server')

describe('server.js', () => {
  describe('GET /', () => {
    it('should return 200 OK', async () => {
      const response = await request(server).get('/')
      expect(response.status).toBe(200)
    })
    it('should return JSON', async () => {
      const response = await request(server).get('/')
      expect(response.type).toMatch(/json/i)
    })
    it('should respond with {api:"We Up"}', async () => {
      const response = await request(server).get('/')
      expect(response.body.api).toBe('We Up')
    })
  })
})
