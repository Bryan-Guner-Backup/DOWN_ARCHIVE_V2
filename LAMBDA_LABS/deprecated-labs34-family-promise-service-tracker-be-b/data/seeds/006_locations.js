const locations = [
  {
    name: 'Smith Residence',
    country: 'United States of America',
    state: 'Washington',
    city: 'Seattle',
    zip: '98101',
    address: '123 Terrance Ave',
  },
  {
    name: 'California Mission',
    country: 'United States of America',
    state: 'California',
    city: 'Los Angeles',
    zip: '90001',
    address: '5828 Carson Dr',
  },
  {
    name: 'Massachusetts Shelter',
    country: 'United States of America',
    state: 'Massachusetts',
    city: 'Boston',
    zip: '01001',
    address: '492 Beverley Way',
  },
  {
    name: 'Jackson Residence',
    country: 'United States of America',
    state: 'Colorado',
    city: 'Denver',
    zip: '80013',
    address: '9475 N Broadway Ave',
  },
];

exports.seed = function (knex) {
  return knex('locations').insert(locations);
};
