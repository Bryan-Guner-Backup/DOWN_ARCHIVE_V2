const faker = require('faker');

const emails = [
  'llama001@maildrop.cc',
  'llama002@maildrop.cc',
  'llama003@maildrop.cc',
  'llama004@maildrop.cc',
  'llama005@maildrop.cc',
  'llama006@maildrop.cc',
  'llama007@maildrop.cc',
  'llama008@maildrop.cc',
];

const profiles = [...new Array(8)].map((i, idx) => ({
  id: idx === 0 ? '00ulthapbErVUwVJy4x6' : faker.random.alphaNumeric(20),
  avatarUrl: faker.image.avatar(),
  email: emails[idx],
  name: `Test00${idx + 1} User`,
}));

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('profiles').insert(profiles);
};
