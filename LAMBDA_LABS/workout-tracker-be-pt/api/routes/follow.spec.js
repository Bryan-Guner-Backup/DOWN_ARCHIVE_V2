const request = require('supertest');
const db = require('../../database/connection.js');
const auth = require('../../server.js');
const Follow = require('../models/followModel');

describe('Follow Testing', () => {
    beforeAll(() => {
        return db.seed.run()
      })
    it('should get all followers by id', () => {
        return request(auth)
        .get('/api/follow/followers/1')
        .then(res =>{
            expect(res.status).toBe(200);
        })
    })
    it('should get all followers count by id', () => {
        return request(auth)
        .get('/api/follow/followers/number/1')
        .then(res =>{
            expect(res.status).toBe(200);
        })
    })
    it('should get all following by id', () => {
        return request(auth)
        .get('/api/follow/following/number/1')
        .then(res =>{
            expect(res.status).toBe(200);
        })
    })
    it('should get all following count by id', () => {
        return request(auth)
        .get('/api/follow/following/number/1')
        .then(res =>{
            expect(res.status).toBe(200);
        })
    })
});