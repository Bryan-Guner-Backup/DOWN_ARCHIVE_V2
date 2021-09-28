const request = require('supertest');
const server = require('../api/server.js');
const db = require('../data/db-config.js');

describe('responses router', function () {

    describe('GET /api/responses', function () {
        it('Should return 200', async function () {
            let res = await request(server).get("/api/responses")
            expect(res.status).toBe(200);
        })
    })

});