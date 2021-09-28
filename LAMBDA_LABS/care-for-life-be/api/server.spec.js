const request = require('supertest');
const db = require('../data/db-config');
const server = require('./server');

describe("server.js", () => {
    it("should return a status of 200", async () => {
        let res = await request(server).get("/");
        expect(res.status).toBe(200);
    });

    it("returns message confirming api is running", async () => {
        let res = await request(server).get("/");
        expect(res.body.api).toBe("running");
    });
});