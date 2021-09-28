const request = require('supertest')
const server = require('../api/server')
const db = require('../data/db-config')

describe('families router', () => {
    describe('GET /api/families', () => {
        it('should return 200', async () => {
            let res = await request(server).get('/api/families')
            expect(res.status).toBe(200)
        })

        it('should return an array of families', async () => {
            let res = await request(server).get('/api/families')
            expect(res.text[7]).toBe('1')
        })
    })

    describe('GET /api/families/:id', () => {
        it('should return a 200', async () => {
            let res = await request(server).get('/api/families/1')
            expect(res.status).toBe(200)
        })
        it('should return family with corresponding ID in URL', async () => {
            let res = await request(server).get('/api/families/1')
            expect(res.text[6]).toBe('1')
        })
    })
})