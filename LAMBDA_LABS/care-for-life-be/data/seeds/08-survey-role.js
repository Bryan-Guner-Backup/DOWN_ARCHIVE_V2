
exports.seed = function (knex) {
  return knex('survey_role').insert([
    {
      survey_id: 1,
      role_id: 2,
    },
    {
      survey_id: 2,
      role_id: 1,
    },
    {
      survey_id: 3,
      role_id: 3,
    },
    {
      survey_id: 4,
      role_id: 6,
    },
    {
      survey_id: 5,
      role_id: 5,
    },
    {
      survey_id: 6,
      role_id: 6,
    },
    {
      survey_id: 7,
      role_id: 3,
    },
  ])
};
