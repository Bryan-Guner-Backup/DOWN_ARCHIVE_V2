
const createFakeSurveys = () => ({
  survey_id: Math.floor(Math.random() * 7) + 1,
  supervisor_id: Math.floor(Math.random() * 4) + 1,
  family_id: Math.floor(Math.random() * 12) + 1,
  individual_id: Math.floor(Math.random() * 100) + 1,
})

exports.seed = function (knex) {
  const surveys = [];
  const desiredSurveys = 150;

  for (let i = 0; i < desiredSurveys; i++) {
    surveys.push(createFakeSurveys())
  }

  return knex('completed_survey').insert(surveys);
};
