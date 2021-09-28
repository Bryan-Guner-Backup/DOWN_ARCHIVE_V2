
exports.seed = function (knex) {
  return knex('survey').insert([
    {
      survey_name: 'Individual Weekly Survey',
    },
    {
      survey_name: 'Individual Monthly Survey',
    },
    {
      survey_name: 'Family Weekly Survey',
    },
    {
      survey_name: 'Family Monthly Survey',
    },
    {
      survey_name: 'Family Annual Survey',
    },
    {
      survey_name: 'Income Generation Survey',
    },
    {
      survey_name: 'Elderly Wellbeing Individual Survey',
    },
  ])
};
