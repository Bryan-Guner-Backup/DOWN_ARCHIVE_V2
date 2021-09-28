const request = require('supertest');
const db = require('../../database/connection.js');
const auth = require('../../server.js');
const Like = require('../models/likeModel');

describe('Follow Testing', () => {
    beforeAll(() => {
        return db.seed.run()
      })
    it('should get all followers by id', () => {
        return request(auth)
        .get('/api/likes/user/1')
        .then(res =>{
            expect(res.status).toBe(200);
        })
    })
    it('should get all followers by id', () => {
        return request(auth)
        .get('/api/likes/post/10')
        .then(res =>{
            expect(res.status).toBe(200);
        })
    })
});