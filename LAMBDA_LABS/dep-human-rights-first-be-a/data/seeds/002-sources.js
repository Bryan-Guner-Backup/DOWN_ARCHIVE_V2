exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('sources')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('sources').insert([{ src_url: 'url1', src_type: 'post' }]);
    });
};
