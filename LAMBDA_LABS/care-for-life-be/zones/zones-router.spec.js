const request = require('supertest');
const server = require('../api/server.js');
const db = require('../data/db-config.js');

describe('zones router', function () {

    const zone = {
        zone_letter: 'z',
        commuity_id: 3
    }

    describe('GET /api/zones', function () {
        it('Should return 200', async function () {
            let res = await request(server).get("/api/zones")
            expect(res.status).toBe(200);
        })
    })

});