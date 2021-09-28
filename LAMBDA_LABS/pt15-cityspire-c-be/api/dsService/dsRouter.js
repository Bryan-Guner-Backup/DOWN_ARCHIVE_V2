const express = require('express');
const router = express.Router();
const dsModel = require('./dsModel');
const authRequired = require('../middleware/authRequired');

const axios = require('axios');

/**
 * @swagger
 * /data/predict/{x1}/{x2}/{x3}:
 *  get:
 *    description: Get prediction for 3 inputs
 *    summary: Returns a prediction result
 *    security:
 *      - okta: []
 *    tags:
 *      - data
 *    parameters:
 *      - x1:
 *        name: x1
 *        in: path
 *        description: a positive number
 *        required: true
 *        example: 3.14
 *        schema:
 *          type: number
 *      - x2:
 *        name: x2
 *        in: path
 *        description: a number
 *        required: true
 *        example: -42
 *        schema:
 *          type: number
 *      - x3:
 *        name: x3
 *        in: path
 *        description: label for prediction
 *        required: true
 *        example: banjo
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: A prediction result object
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                prediction:
 *                  type: boolean
 *                  description: is prediction true or false
 *                probability:
 *                  type: number
 *                  description: the probability between 0 and 1
 *              example:
 *                prediction: true
 *                probability: 0.9479960541387882
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      500:
 *        description: 'Error making prediction'
 */
router.get('/predict/:x1/:x2/:3', authRequired, function (req, res) {
  const x1 = String(req.params.x1);
  const x2 = String(req.params.x2);
  const x3 = String(req.params.x3);

  dsModel
    .getPrediction(x1, x2, x3)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
});

/**
 * @swagger
 * /data/viz/{state}:
 *  get:
 *    description: plotly vizualization data
 *    summary: Returns a plotly data
 *    security:
 *      - okta: []
 *    tags:
 *      - data
 *    parameters:
 *      - state:
 *        name: state
 *        in: path
 *        description: get viz data for state
 *        required: true
 *        example: UT
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: A plotly result object. See [DS service](https://ds-bw-test.herokuapp.com/#/default/viz_viz__statecode__get) for detailed docs.
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      500:
 *        description: 'Error making prediction'
 */
router.get('/viz/:state', authRequired, function (req, res) {
  const state = String(req.params.state);

  dsModel
    .getViz(state)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
});

/**
 * @swagger
 * /data:
 *  post:
 *    description: Get data for requested city
 *    summary: Returns city data
 *    security:
 *      - okta: []
 *    tags:
 *      - data
 *    requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *    responses:
 *      200:
 *        description: Returns a city object with all city data
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      500:
 *        description: Server Error
 */

router.post('/', authRequired, function (req, res) {
  // Capitalizes all city and state names for DS API
  const city = req.body.city.replace(/\b\w/g, (l) => l.toUpperCase());
  const state = req.body.state.replace(/\b\w/g, (l) => l.toUpperCase());

  const location = `${city}, ${state}`;

  dsModel
    .getCityData(location)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
});

/**
 * @swagger
 * /data/locations:
 *  get:
 *    description: Get list of cities available from DS Database
 *    summary: Returns list of available cities
 *    security:
 *      - okta: []
 *    tags:
 *      - data
 *    responses:
 *      200:
 *        description: Returns a list of all cities
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      500:
 *        description: Server Error
 */

router.get('/locations', authRequired, function (req, res) {
  dsModel
    .getAllLocations()
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
});

//THESE ARE THE PROXY ENDPOINTS

router.get('/city', (req, res) => {
  console.log(req.body);

  axios
    .post(
      'http://cityspire00n.eba-diy2emuk.us-east-1.elasticbeanstalk.com/location/data',
      req.body
    )
    .then((res) => {
      console.log(res);
      res.status(200).json(res.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'proxy failed' });
    });
});

module.exports = router;
