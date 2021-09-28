
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('conversation').del()
    .then(function () {
      // Inserts seed entries
      return knex('conversation').insert([
        {id: 1, user_1: 'Jane', user_2: 'Aaron'}
      ]);
    });
};
