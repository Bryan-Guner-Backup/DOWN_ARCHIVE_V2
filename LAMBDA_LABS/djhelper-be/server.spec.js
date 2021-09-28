const request = require('supertest');

const server = require('./server.js');
const db = require('./data/db-config.js');

describe('server is properly setup', () => {
  it('shoul set the environment to testing ', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('GET / is set up properly', () => {
    it('should return 200', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });
    it('should return JSON type', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json');
    });
    it('should return json, then parse to object', async () => {
      const res = await request(server).get('/');
      expect(typeof JSON.parse(res.text)).toBe('object');
    });
  }); // end of GET Describe
});
