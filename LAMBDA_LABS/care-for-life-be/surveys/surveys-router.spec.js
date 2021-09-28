const request = require('supertest');
const server = require('../api/server.js');
const db = require('../data/db-config.js');

describe('experience-router', function () {

    const survey = {
        survey_name: 'new survey'
    }

    describe('GET /api/surveys', function () {
        it('Should return 200', async function () {
            let res = await request(server).get("/api/surveys")
            expect(res.status).toBe(200);
        })
    })

    describe('POST /api/surveys', function () {
        it('Should post and return a 201', async function () {
            let res = await request(server).post("/api/surveys").send(survey)
            expect(res.status).toBe(201);
        })
    })
});