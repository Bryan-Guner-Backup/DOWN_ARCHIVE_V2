
exports.seed = function (knex) {
  return knex('community').insert([
    { community: 'community 1' },
    { community: 'community 2' },
    { community: 'community 3' },
  ]);
};
