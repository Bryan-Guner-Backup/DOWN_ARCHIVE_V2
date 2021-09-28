const request = require('supertest')
const server = require('../api/server')
const db = require('../data/db-config')

describe('questions router', () => {
    describe('GET /api/questions', () => {
        it('should return 200', async () => {
            let res = await request(server).get('/api/questions')
            expect(res.status).toBe(200)
        })

        it('should return an array of individuals', async () => {
            let res = await request(server).get('/api/questions')
            expect(res.text[7]).toBe('1')
        })
    })

    describe('GET /api/questions/:id', () => {
        it('should return 200', async () => {
            let res = await request(server).get('/api/questions/1')
            expect(res.status).toBe(200)
        })

        it('should return question with corresponding ID in URL', async () => {
            let res = await request(server).get('/api/questions/1')
            expect(res.text[6]).toBe('1')
        })
    })
})