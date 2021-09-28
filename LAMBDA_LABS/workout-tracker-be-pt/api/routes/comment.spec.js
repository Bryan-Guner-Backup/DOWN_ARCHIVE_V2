const request = require('supertest');
const db = require('../../database/connection.js');
const auth = require('../../server.js');
const Entity = require('../models/commentModel');

describe('Comment Testing', () => {
    beforeAll(() => {
        return db.seed.run()
      })
    it('should get all comments by id', () => {
        return request(auth)
        .get('/api/comments/get/10')
        .then(res =>{
            expect(res.status).toBe(200);
        })
    });
    it('should get number of comments for id', () => {
        return request(auth)
        .get('/api/comments/number/10')
        .then(res =>{
            expect(res.status).toBe(200);
        })
    });
    it('should get all comments by user id', () => {
        return request(auth)
        .get('/api/comments/user/1')
        .then(res =>{
            expect(res.status).toBe(200);
        })
    });
});
