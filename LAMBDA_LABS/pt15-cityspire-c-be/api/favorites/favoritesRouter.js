const express = require('express');
const authRequired = require('../middleware/authRequired');
const Favorites = require('./favoritesModel');
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Favorite:
 *      type: object
 *      required:
 *        - user_id
 *        - lat
 *        - lng
 *        - city_id
 *      properties:
 *        user_id:
 *          type: string
 *          description: This is a foreign key (the users ID)
 *        lat:
 *          type: float
 *        lng:
 *          type: float
 *        city_id:
 *          type: string
 *      example:
 *        users_id: '00ulthapbErVUwVJy4x6'
 *        lat: 40.709397
 *        lng: -73.9231657
 *        city_id: 'sFsd342FgsD32'
 *
 * /favorite:
 *  get:
 *    description: Returns a list of all favorites
 *    summary: Get a list of all favorites
 *    security:
 *      - okta: []
 *    tags:
 *      - favorite
 *    responses:
 *      200:
 *        description: array of favorites
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Favorites'
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      403:
 *        $ref: '#/components/responses/UnauthorizedError'
 */
router.get('/', authRequired, function (req, res) {
  Favorites.findAll()
    .then((favorites) => {
      res.status(200).json(favorites);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

/**
 * @swagger
 * components:
 *  parameters:
 *    favoriteId:
 *      name: id
 *      in: path
 *      description: ID of the user whose favorites to be returned
 *      required: true
 *      example: 00uhjfrwdWAQvD8JV4x6
 *      schema:
 *        type: string
 *
 * /favorite/{id}:
 *  get:
 *    description: Find favorites by ID
 *    summary: Returns a single users favorites
 *    security:
 *      - okta: []
 *    tags:
 *      - profile
 *    parameters:
 *      - $ref: '#/components/parameters/favoriteId'
 *    responses:
 *      200:
 *        description: A favorite object
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Favorites'
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      404:
 *        description: 'User not found'
 */
router.get('/:userId', authRequired, function (req, res) {
  const id = String(req.params.userId);
  Favorites.findByUserId(id)
    .then((favorite) => {
      if (favorite) {
        res.status(200).json(favorite);
      } else {
        res.status(404).json({ error: 'FavoriteNotFound' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

/**
 * @swagger
 * /favorite:
 *  post:
 *    summary: Add a favorite
 *    security:
 *      - okta: []
 *    tags:
 *      - profile
 *    parameters:
 *      - $ref: '#/components/parameters/favoriteId'
 *    requestBody:
 *      description: Favorite object to to be added
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Favorite'
 *    responses:
 *      400:
 *        $ref: '#/components/responses/BadRequest'
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      404:
 *        description: 'Favorite not found'
 *      200:
 *        description: A favorite object
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: A message about the result
 *                  example: favorite created
 *                favorite:
 *                  $ref: '#/components/schemas/Favorite'
 */
router.post('/', authRequired, async (req, res) => {
  const favorite = req.body;
  if (favorite) {
    try {
      const newFave = await Favorites.create(favorite);
      res
        .status(200)
        .json({ message: 'favorite created', favorite: newFave[0] });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Missing Data', error: error });
    }
  } else {
    res.status(400).json({ message: 'Incomplete Data, please retry' });
  }
});

/**
 * @swagger
 * /favorite/{id}:
 *  delete:
 *    summary: Remove a favorite
 *    security:
 *      - okta: []
 *    tags:
 *      - profile
 *    parameters:
 *      - $ref: '#/components/parameters/favoriteId'
 *    responses:
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      404:
 *        $ref: '#/components/responses/NotFound'
 *      200:
 *        description: A favorite object
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: A message about the result
 *                  example: Profile '00uhjfrwdWAQvD8JV4x6' was deleted.
 *                favorite:
 *                  $ref: '#/components/schemas/Favorite'
 */
router.delete('/:id', authRequired, function (req, res) {
  const id = req.params.id;
  try {
    Favorites.findById(id).then((favorite) => {
      if (favorite) {
        Favorites.remove(id).then(() => {
          res.status(200).json({
            message: `Favorite '${id}' was deleted.`,
            favorite: favorite,
          });
        });
      } else {
        res.status(404).json({ message: `Favorite ${id} does not exist!` });
      }
    });
  } catch (err) {
    res.status(500).json({
      message: `Could not delete favorite with ID: ${id}`,
      error: err.message,
    });
  }
});

module.exports = router;
