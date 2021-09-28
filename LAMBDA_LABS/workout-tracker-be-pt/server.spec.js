const request = require('supertest');

const server = require('./server');

const db = require('./database/connection');

describe('Server.js', () => {
  describe('Server Up and running', () => {
    it('should return 200 that server is up', async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get('/');

      expect(response.status).toEqual(expectedStatusCode);
    });
  });
});