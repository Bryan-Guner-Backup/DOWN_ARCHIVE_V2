const request = require('supertest');
const db = require('../../database/connection.js');
const auth = require('../../server.js');
const Diet = require('../models/dietModel.js');
const User = require('../models/userModel.js');

let token;

describe('Diet', () => {

  describe('Login for a token', () => {
    it('should receive a token when logged in', () => {
      return request(auth)
        .post('/api/login')
        .send({email: 'egg@gmail.com', password: 'password'})
        .then(response => {
          token = response.body.token
          expect(response.body.token).toBe(token)
        })
    })
    
    describe('Retrieve diet entries', () => {
      it('should return a 200 status if logged in', () => {
        return request(auth)
          .get('/api/diets')
          .set('Authorization', token)
          .then(response => {
            expect(response.status).toBe(200)
          })
        })
      })

    describe('Don\'t retrieve diet entries', () => {
      it('should return a 500 status if not logged in', () =>{
        return request(auth)
          .get('/api/diets')
          .then(response => {
            expect(response.status).toBe(500)
          })
      })
    })

    describe('add a diet entry', () => {
      it('should return a 201 status for new entry if logged in', () => {
        return request(auth)
          .post('/api/diets')
          .set('Authorization', token)
          .send({
              user_id: 1,
              meal_date: '2020-06-11',
              meal_time: '14:00',
              meal_category: 'Lunch',
              food_name: 'Ribeye Steak, grilled',
              food_quantity: 6,
              food_measure: 'ounces',
              food_calories: 370,
              food_fat: 33,
              food_protein: 18,
              food_carbs: 0,
              food_fiber: 0
          })
          .then(response => {
            expect(response.status).toBe(201)
          })
        })
      })
    

    describe('Don\'t add a diet entry', () => {
      it('should return a 500 status for new entry if not logged in', () => {
        return request(auth)
          .post('/api/diets')
          .send({
              user_id: 1,
              meal_date: '2020-06-10',
              meal_time: '2:00 pm',
              meal_category: 'Lunch',
              food_name: 'Ribeye Steak, grilled',
              food_quantity: 6,
              food_measure: 'ounces',
              food_calories: 370,
              food_fat: 33,
              food_protein: 18,
              food_carbs: 0,
              food_fiber: 0
          })
          .then(response => {
            expect(response.status).toBe(500)
          })
        })
      })
    })
})