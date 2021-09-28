const request = require('supertest');
const jwt = require('jsonwebtoken');
const server = require('../../server.js');

const db = require('../db-config.js');

describe('registration and login router is properly setup', () => {
  const newUser = {
    username: 'raza12233',
    password: 'password',
    email: 'raza292338@gmail.com'
  };

  describe('registration is working fine', () => {
    it('shoul return /api/register status to be 200 ', async () => {
      const res = await request(server).get('/api/register/');
      expect(res.status).toBe(200);
    });
    it('should register new user', async () => {
      const res = await request(server)
        .post('/api/register/dj')
        .send(newUser);
      expect(res.status).toBe(201);
    });
  });
  describe('login is working fine', () => {
    it('shoul return /api/login status to be 200 ', async () => {
      const res = await request(server).get('/api/login/');
      expect(res.status).toBe(200);
    });

    it('should login user and return token', async () => {
      const res = await request(server)
        .post('/api/login/dj')
        .send({ username: newUser.username, password: newUser.password });
      expect(res.status).toBe(200);
      expect(typeof res.body.token).toBe('string');
    });

    it('should not login user with wrong username and password', async () => {
      const res = await request(server)
        .post('/api/login/dj')
        .send({ username: 'fakeUsername', password: 'fakePassword' });
      expect(res.status).toBe(401);
      expect(res.body.token).not.toBeDefined();
    });
  });
});

beforeAll(async () => {
  // await db('djs').truncate();
  return db.raw('truncate table djs cascade');
});
