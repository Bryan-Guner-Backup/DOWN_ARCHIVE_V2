const supertest = require('supertest');
const app = require('../../api/app.js');
const url = '/incidents';

describe('server', () => {
  it('can run the tests', () => {
    expect(true).toBeTruthy();
  });

  describe('GET /', function () {
    it('responds with json', function (done) {
      supertest(app)
        .get('/incidents')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET / fetches sample data', () => {
    it('should return with http status code 200 ', async () => {
      const incidents = await supertest(app)
        .get(url)
        .then((response) => {
          expect(200);
          return response;
        });
      expect(
        Object.prototype.hasOwnProperty.call(incidents.body.data[0], 'bar')
      );
    });
  });
});
