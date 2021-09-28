const ethnicities = [
  {
    ethnicity: 'White',
  },
  {
    ethnicity: 'Hispanic',
  },
  {
    ethnicity: 'Asian',
  },
  {
    ethnicity: 'African American',
  },
];

exports.seed = function (knex) {
  return knex('ethnicity').insert(ethnicities);
};
