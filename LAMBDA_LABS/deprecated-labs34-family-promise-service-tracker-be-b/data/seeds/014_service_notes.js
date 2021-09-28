const faker = require('faker');

const notes = [
  {
    service_entries_id: 1,
    profile_id: '00unr8nm2sJkxkcrH5d6',
    service_note: faker.lorem.sentence(),
  },
  {
    service_entries_id: 2,
    profile_id: '00unr3s3m2zHx70ck5d6',
    service_note: faker.lorem.sentence(),
  },
  {
    service_entries_id: 3,
    profile_id: '00unr8nm2sJkxkcrH5d6',
    service_note: faker.lorem.sentence(),
  },
  {
    service_entries_id: 4,
    profile_id: '00unr3s3m2zHx70ck5d6',
    service_note: faker.lorem.sentence(),
  },
];

exports.seed = function (knex) {
  return knex('service_notes').insert(notes);
};
