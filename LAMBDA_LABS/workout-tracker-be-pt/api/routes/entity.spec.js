const request = require('supertest');
const db = require('../../database/connection.js');
const auth = require('../../server.js');
const Entity = require('../models/entityModel');

describe('Test Entity Routes ', () => {
    beforeAll(() => {
        return db.seed.run()
      })
    it('should get the feed of our database', () => {
        return request(auth)
        .get('/api/feed')
        .then(res =>{
            expect(res.status).toBe(200);
        })
    });

    it('should get the feed of our database by id', () => {
        return request(auth)
        .get('/api/feed/entity/20')
        .then(res =>{
            expect(res.status).toBe(201);
        })
    });
});