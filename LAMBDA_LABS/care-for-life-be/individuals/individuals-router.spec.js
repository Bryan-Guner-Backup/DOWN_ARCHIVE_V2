const request = require('supertest')
const server = require('../api/server')
const db = require('../data/db-config')

describe('individuals router', () => {
    describe('GET /api/individuals', () => {
        it('should return 200', async () => {
            let res = await request(server).get('/api/individuals')
            expect(res.status).toBe(200)
        })

        it('should return an array of individuals', async () => {
            let res = await request(server).get('/api/individuals')
            expect(res.text[7]).toBe('1')
        })
    })

    describe('GET /api/individuals/:id', () => {
        it('should return 200', async () => {
            let res = await request(server).get('/api/individuals/1')
            expect(res.status).toBe(200)
        })

        it('should return individual with corresponding ID in URL', async () => {
            let res = await request(server).get('/api/individuals/1')
            expect(res.text[6]).toBe('1')
        })
    })
})