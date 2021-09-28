const faker = require('faker');

const createFakeResponse = () => ({
  response: faker.hacker.phrase(),
  question_id: Math.floor(Math.random() * 25) + 1,
  completed_survey_id: Math.floor(Math.random() * 150) + 1,
  family_id: Math.floor(Math.random() * 12) + 1,
  individual_id: Math.floor(Math.random() * 100) + 1,
})

exports.seed = function (knex) {
  const responses = [];
  const desiredEntries = 500;

  for (let i = 0; i < desiredEntries; i++) {
    responses.push(createFakeResponse())
  }

  return knex('response').insert(responses);
};
