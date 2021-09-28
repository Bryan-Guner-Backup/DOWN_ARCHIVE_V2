const request = require('supertest');
const server = require('../../server.js');

const searchTerm = 'taylor';
const spotifyId = '4R2kfaDFhslZEMJqAFNpdd';

describe('public routes tesing', () => {
  it('should return events', async () => {
    const res = await request(server).get('/api/events/');
    expect(res.status).toBe(200);
    expect(typeof res.body).toBe('object');
  });

  it('should return track search', () => {
    request(server)
      .get(`/api/track/${searchTerm}`)
      .expect(200);
  });
  it('should return prediction search', () => {
    request(server)
      .get(`/api/predict/${spotifyId}`)
      .expect(200);
  });
});
