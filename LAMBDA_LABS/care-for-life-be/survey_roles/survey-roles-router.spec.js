const request = require('supertest');
const server = require('../api/server.js');
const db = require('../data/db-config.js');

describe('survey roles router', function () {

    describe('GET /api/surveyRoles', function () {
        it('Should return 200', async function () {
            let res = await request(server).get("/api/surveyRoles")
            expect(res.status).toBe(200);
        })
    })

});