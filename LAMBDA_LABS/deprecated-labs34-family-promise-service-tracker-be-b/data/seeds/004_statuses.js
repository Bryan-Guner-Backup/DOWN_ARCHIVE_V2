const statuses = [
  {
    status: 'Complete',
  },
  {
    status: 'In Progress',
  },
  {
    status: 'Needs Followup',
  },
  {
    status: 'Not Started',
  },
];

exports.seed = function (knex) {
  return knex('statuses').insert(statuses);
};
