const request = require('supertest');
const should = require('should');

const server = require('../../server.js');

// ===========================set up and test authentications=======================

let token = null;
let djId = null;
let eventId = null;
let trackId = null;
let playlistId = null;

const user = {
  username: 'raza',
  password: 'password',
  email: 'raasl13@gmail.com'
};

beforeEach(async done => {
  await request(server)
    .post('/api/register/dj')
    .send(user);
  request(server)
    .post('/api/login/dj')
    .send({ username: user.username, password: user.password })
    .end(function(err, res) {
      djId = res.body.id;
      token = res.body.token;
      done();
    });
});
describe('auth router is properly setup', () => {
  it('should return status 200 working', async () => {
    const res = await request(server)
      .get('/api/auth/')
      .set('Authorization', token);
    expect(res.status).toBe(200);
  });
});

// ======================End of Authentication Setup and Testin==============

// ======================Beging DJ router Testing===============================

describe('dj auth router testing', () => {
  const updatedName = 'newName';
  it('should update dj info', async () => {
    const res = await request(server)
      .put(`/api/auth/dj/${djId}`)
      .set('Authorization', token)
      .send({
        name: updatedName
      });
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(updatedName);
  });

  it('should delete dj', async () => {
    const res = await request(server)
      .delete(`/api/auth/dj/${djId}`)
      .set('Authorization', token);
    expect(res.status).toBe(200);
  });
}); // end of dj auth describe

// ======================End of Beging DJ router Testing===============================

// ======================Beging Event router Testing===============================

describe('event auth router testing', () => {
  const newEvent = {
    name: 'Birthday',
    date: '11/15/2020',
    dj_id: djId
  };
  it('should add new event', async () => {
    const res = await request(server)
      .post('/api/auth/event/')
      .set('Authorization', token)
      .send(newEvent);
    const eventObject = JSON.parse(res.text);
    eventId = eventObject.id;
    expect(res.status).toBe(200);
    expect(res.type).toMatch('json');
    expect(typeof JSON.parse(res.text)).toBe('object');
  });

  it('should return single event', done => {
    request(server)
      .get(`/api/auth/event/${eventId}`)
      .set('Authorization', token)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        return done();
      });
  });

  it('should update an event', async () => {
    const newName = 'new birthday';
    const res = await request(server)
      .put(`/api/auth/event/${eventId}`)
      .set('Authorization', token)
      .send({
        name: newName
      });
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(newName);
  });

  it('should delete the event', done => {
    request(server)
      .delete(`/api/auth/event/${eventId}`)
      .set('Authorization', token)
      .expect(200)
      .end(function(err, res) {
        done();
      });
  });
}); // end of event auth describe

// ======================End Of Event router Testing===============================

// ======================Beginning Of Track router Testing===============================

describe('track auth router testing', () => {
  const newTrack = {
    spotify_id: '4pvb0WLRcMtbPGmtejJJ6y',
    name: 'raza121234 - exile (feat. Bon Iver)2',
    artist_name: 'Taylor Swift',
    url: 'https://open.spotify.com/track/4pvb0WLRcMtbPGmtejJJ6y',
    isExplicit: false,
    event_id: eventId
  };
  beforeEach(async () => {
    const res = await request(server)
      .post('/api/track/')
      .send(newTrack);
    expect(res.status).toBe(201);
    const trackObject = JSON.parse(res.text);
    trackId = trackObject.id;
  });

  it('should delete the track ', () => {
    request(server)
      .delete(`/api/auth/track/${trackId}`)
      .set('Authorization', token)
      .expect(200);
  });

  it('should move the track to playlist', async () => {
    const res = await request(server)
      .post(`/api/auth/track/move/${trackId}`)
      .set('Authorization', token);
    playlistId = res.body.id;
    expect(res.status).toBe(200);
  });

  it('should delete the playlist', () => {
    request(server)
      .delete(`/api/auth/track/playlist/${playlistId}`)
      .set('Authorization', token)
      .expect(200);
  });
}); // end of describe track auth

// ======================End Of Track router Testing====================================

// ======================Begining Of Vote router Testing====================================

describe('vote auth router testing', () => {
  it('should upvote/downvote a track', async () => {
    const res = await request(server)
      .post('/api/auth/vote/')
      .set('Authorization', token)
      .send({
        trackId
      });
    expect(res.status).toBe(200);
    expect(typeof res.body).toBe('object');
  });
});

// ======================End Of Vote router Testing====================================
