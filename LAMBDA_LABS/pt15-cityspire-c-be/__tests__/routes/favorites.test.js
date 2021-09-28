const request = require('supertest');
const express = require('express');
const Favorites = require('../../api/favorites/favoritesModel');
const favoritesRouter = require('../../api/favorites/favoritesRouter');
const server = express();
server.use(express.json());

jest.mock('../../api/favorites/favoritesModel');
jest.mock('../../api/middleware/authRequired', () =>
  jest.fn((req, res, next) => next())
);

describe('favorites router endpoints', () => {
  beforeAll(() => {
    // This is the module/route being tested
    server.use(['/favorite', '/favorites'], favoritesRouter);
    jest.clearAllMocks();
  });

  describe('GET /favorites', () => {
    it('should return 200', async () => {
      Favorites.findAll.mockResolvedValue([]);
      const res = await request(server).get('/favorites');

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(0);
      expect(Favorites.findAll.mock.calls.length).toBe(1);
    });
  });

  describe('GET /favorites/:userId', () => {
    it('should return 200 when favorite found', async () => {
      Favorites.findByUserId.mockResolvedValue({
        id: 7,
        users_id: '#w4frgRgesfeddf',
        lat: -103.327,
        lng: 42.322,
        city_id: 'as23@#$FSdwerwerw',
      });
      const res = await request(server).get('/favorites/7');

      expect(res.status).toBe(200);
      expect(res.body.users_id).toBe('#w4frgRgesfeddf');
      expect(Favorites.findByUserId.mock.calls.length).toBe(1);
    });

    it('should return 404 when no favorite found', async () => {
      Favorites.findByUserId.mockResolvedValue();
      const res = await request(server).get('/favorites/7');

      expect(res.status).toBe(404);
      expect(res.body.error).toBe('FavoriteNotFound');
    });
  });

  describe('POST /favorites/id', () => {
    it('should return 200 when favorite is added', async () => {
      const favorite = {
        id: 7,
        users_id: '#w4frgRgesfeddf',
        lat: -103.327,
        lng: 42.322,
        city_id: 'as23@#$FSdwerwerw',
      };
      Favorites.findById.mockResolvedValue(undefined);
      Favorites.create.mockResolvedValue([Object.assign({ id: 7 }, favorite)]);
      const res = await request(server).post('/favorites/7').send(favorite);

      expect(res.status).toBe(200);
      expect(res.body.favorite.users_id).toBe('#w4frgRgesfeddf');
      expect(Favorites.create.mock.calls.length).toBe(1);
    });
  });

  describe('DELETE /favorites/id', () => {
    it('should return 200 when favorite is Deleted', async () => {
      const favorite = {
        id: 7,
        users_id: '#w4frgRgesfeddf',
        lat: -103.327,
        lng: 42.322,
        city_id: 'as23@#$FSdwerwerw',
      };
      Favorites.findById.mockResolvedValue(favorite);
      Favorites.remove.mockResolvedValue({
        message: `Favorite '${favorite.id}' was deleted.`,
        favorite: favorite,
      });
      const res = await request(server).delete('/favorites/7').send(favorite);

      expect(res.status).toBe(200);
      expect(res.body.favorite.users_id).toBe('#w4frgRgesfeddf');
      expect(res.body.message).toBe("Favorite '7' was deleted.");
      expect(Favorites.create.mock.calls.length).toBe(1);
    });
  });
});
