const request = require('supertest')
const server = require('../api/server')
const db = require('../data/db-config')

describe('auth router', () => {
    describe('/api/auth/login', () => {
        it('should return 404 without token', async () => {
            let res = await request(server).get('/api/auth/login')
            expect(res.status).toBe(404)
        })
    })
})