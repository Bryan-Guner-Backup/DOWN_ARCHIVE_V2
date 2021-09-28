// these tests are for the old implementation of the database
// the database has now been refactored by Labs 24 Team. 

/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const request = require('supertest')
const server = require('../api/server')

describe('Post Endpoints', () => {
  it('should update a new post', async () => {
    const res = await request(server)
      .put('/api/level_1/update/1')
      .send({
        ID: 1,
        User_ID: 1,
        Level: 1,
        Lesson: 1,
        Practice: 1,
        Quiz: 0,
        Active: 1,
        signs: "A to E"
      })
    // expect(res.statusCode).toEqual(201)
    expect(res.type).toMatch(/json/i)
    //expect(res.body).toHaveProperty('put')
  })
})

  it('returns user info on level table 1', async () => {
    const res = await request(server)
      .get('/api/level_1/info/1')
      .set({ User_ID: 1})
      // expect(res.statusCode).toEqual(200)
      expect(res.type).toMatch(/json/i)
  })
