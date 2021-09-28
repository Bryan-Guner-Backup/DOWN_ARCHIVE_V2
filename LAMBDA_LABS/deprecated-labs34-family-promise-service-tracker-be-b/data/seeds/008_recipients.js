const recipients = [
  {
    firstname: 'Michael',
    middle: 'Joseph',
    lastname: 'Smith',
    ethnicity_id: 1,
    household_id: 1,
    email: 'michaeljsmith87@gmail.com',
    phone: '(555)555-5555',
    age: 33,
    veteran: true,
    mental_status: '',
  },
  {
    firstname: 'Jose',
    middle: 'Guadalupe',
    lastname: 'Gutierrez',
    ethnicity_id: 2,
    household_id: 2,
    email: 'jgutierrez95@gmail.com',
    phone: '(444)444-4444',
    age: 26,
    veteran: false,
    mental_status: '',
  },
  {
    firstname: 'Victoria',
    middle: '',
    lastname: 'Nguyen',
    ethnicity_id: 3,
    household_id: 3,
    email: 'victorian90@gmail.com',
    phone: '(333)333-3333',
    age: 30,
    veteran: false,
    mental_status: '',
  },
  {
    firstname: 'Andre',
    middle: '',
    lastname: 'Jackson',
    ethnicity_id: 4,
    household_id: 4,
    email: 'ajackson85@gmail.com',
    phone: '(222)222-2222',
    age: 36,
    veteran: true,
    mental_status: '',
  },
];

exports.seed = function (knex) {
  return knex('recipients').insert(recipients);
};
