const faker = require('faker');

const genders = ['male', 'female', 'other']
const relations = ['brother', 'sister', 'son', 'daughter', 'spouse', 'other']
const marital = ['married', 'widowed', 'single', 'divorced', 'other']

const createFakeUsers = () => ({
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  family_id: Math.floor(Math.random() * 12) + 1,
  date_of_birth: faker.date.past(),
  gender: genders[Math.floor(Math.random() * Math.floor(3))],
  hoh: faker.random.boolean(),
  relation_to_hoh: relations[Math.floor(Math.random() * Math.floor(6))],
  marital_status: marital[Math.floor(Math.random() * Math.floor(5))]
})

exports.seed = function (knex) {
  const individuals = [];
  const desiredEntries = 100;
  for (let i = 0; i < desiredEntries; i++) {
    individuals.push(createFakeUsers());
  }
  return knex('individual').insert(individuals);
};
