const request = require('supertest')
const server = require('../api/server')
const db = require('../data/db-config')

describe('completed-surveys router', () => {
    describe('GET /api/completedSurveys', () => {
        it('should return 200', async () => {
            let res = await request(server).get('/api/completedSurveys')
            expect(res.status).toBe(200)
        })

        it('should return an array of completed surveys', async () => {
            let res = await request(server).get('/api/completedSurveys')
            expect(res.text[7]).toBe('1')
        })
    })

    describe('GET /api/completedSurveys/:id', () => {
        it('should return 200', async () => {
            let res = await request(server).get('/api/completedSurveys/1')
            expect(res.status).toBe(200)
        })

        it('should return survey with ID corresponding in URL', async () => {
            let res = await request(server).get('/api/completedSurveys/1')
            expect(res.text[6]).toBe('1')
        })
    })
})