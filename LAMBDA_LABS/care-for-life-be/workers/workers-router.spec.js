const request = require('supertest');
const server = require('../api/server.js');
const db = require('../data/db-config.js');

describe('workers router', function () {

    const worker = {
        first_name: "B",
        last_name: "T",
        email: "b@b.com",
        password: "b",
        role_name: "supervisor_health",
        zone_id: 7,
        community_id: 3
    }

    describe('GET /api/workers', function () {
        it('Should return 200', async function () {
            let res = await request(server).get("/api/workers")
            expect(res.status).toBe(200);
        })
    })

});