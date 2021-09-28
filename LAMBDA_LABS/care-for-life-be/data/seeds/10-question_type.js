
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('question_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('question_type').insert([
        {
          type: 'multiple choice'
        },
        {
          type: 'yes or no'
        },
        {
          type: 'numerical'
        },
        {
          type: 'custom input'
        }
      ]);
    });
};
