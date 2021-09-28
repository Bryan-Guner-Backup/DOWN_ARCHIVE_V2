const request = require('supertest')
const server = require('../api/server')
const db = require('../data/db-config')

describe('communities router', () => {
    describe('GET /api/communities', () => {
        it('should return 200', async () => {
            let res = await request(server).get('/api/communities')
            expect(res.status).toBe(200)
        })
        it('should return an array of communities', async () => {
            let res = await request(server).get('/api/communities')
            expect(res.text[7]).toBe("1")
        })
    })

    describe('GET /api/communities/:id', () => {
        it('should return 200', async () => {
            let res = await request(server).get('/api/communities/1')
            expect(res.status).toBe(200)
        })
        it('should return community with corresponding ID in URL', async () => {
            let res = await request(server).get('/api/communities/1')
            expect(res.text[6]).toBe('1')
        })
    })
})