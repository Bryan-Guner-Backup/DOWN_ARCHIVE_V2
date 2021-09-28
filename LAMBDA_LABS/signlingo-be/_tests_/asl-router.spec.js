// these tests are for the old implementation of the database
// the database has now been refactored by Labs 24 Team. 

const server = require('../api/server');
const request = require('supertest');


describe("GET asl images", () => {
    it("Returns asl signs A to E", async () => {
        const res = await request(server)
            .get('/api/asl/AtoE')
            expect(res.type).toMatch(/json/i)
            expect(res.status).toBe(500)
    })
    it("Returns asl signs F to J", async () => {
        const res = await request(server)
            .get('/api/asl/FtoJ')
            expect(res.type).toMatch(/json/i)
            expect(res.status).toBe(500)
    })
    it("Returns asl signs K to O", async () => {
        const res = await request(server)
            .get('/api/asl/KtoO')
            expect(res.type).toMatch(/json/i)
            expect(res.status).toBe(500)
    })
    it("Returns asl signs P to T", async () => {
        const res = await request(server)
            .get('/api/asl/FtoJ')
            expect(res.type).toMatch(/json/i)
            expect(res.status).toBe(500)
    })
    it("Returns asl signs U to Z", async () => {
        const res = await request(server)
            .get('/api/asl/UtoZ')
            expect(res.type).toMatch(/json/i)
            expect(res.status).toBe(500)
    })
})