exports.seed = function (knex) {
  // Inserts seed entries
  return knex('favorites').insert([
    {
      users_id: '00ulthapbErVUwVJy4x6',
      lat: 40.709397,
      lng: -73.9231657,
      city: 'Tampa',
      state: 'florida',
      zip: 11234,
    },
  ]);
};
