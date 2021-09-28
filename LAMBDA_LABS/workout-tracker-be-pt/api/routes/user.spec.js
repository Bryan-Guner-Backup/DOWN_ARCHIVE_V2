const request = require('supertest');
const db = require('../../database/connection.js');
const auth = require('../../server.js');
const User = require('../models/userModel.js');

let token;

describe('User', () => {
  beforeAll(() => {
    return db.seed.run()
  })

  describe('Register a new user', () => {
    it('should return a 201 success status', () => {
      return request(auth)
      .post('/api/register')
      .send({
        username: "Evelyn",
        email: "egg@gmail.com",
        password: "password",
      })
      .then(response => {
        expect(response.status).toBe(201)
      })
    })
    it('should return a 500 if no username is entered', () => {
      return request(auth)
      .post('/api/register')
      .send({
        email: "egg2@gmail.com",
        password: "password"
      })
      .then(response => {
        expect(response.status).toBe(500)
      })
    })
  })

  describe('Login a user', () => {
    it('should return a 200 success status', () => {
      return request(auth)
      .post('/api/login')
      .send({
        email: "egg@gmail.com",
        password: "password"
      })
      .then(response => {
        token = response.body.token
        expect(response.status).toBe(200)
      })
    })
    it('should return a 401 error if credentials are invalid', () => {
      return request(auth)
      .post('/api/login')
      .send({
        email: "egg2@gmail.com",
        password: "password"
      })
      .then(response => {
        expect(response.status).toBe(401)
      })
    })
  })

  describe('User list', () => {
    it('should return a 200 status when retrieving a user list if logged in', () =>{
      return request(auth)
      .get('/api/users/org')
      .set('Authorization', token)
      .then(response => {
        expect(response.status).toBe(200)
      })
    })
    it('should return a 500 status when not logged in and trying to retrieve a user list', () => {
      return request(auth)
        .get('/api/users/org')
        .then(response => {
          expect(response.status).toBe(500)
        })
    })
  })
})



