const supertest = require('supertest');
const app = require('../../api/app.js');
const url = '/';

app.get('/', function (req, res) {
  res.status(200);
});

describe('server', () => {
  it('can run the tests', () => {
    expect(true).toBeTruthy();
  });

  describe(url, function () {
    supertest(app).get('/').expect(200);
  });
});
