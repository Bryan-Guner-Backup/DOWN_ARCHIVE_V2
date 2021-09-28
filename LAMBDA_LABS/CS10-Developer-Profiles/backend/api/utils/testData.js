module.exports = {
  testEmployer: {
    companyName: 'The company inc',
    email: 'company@email.com',
    password: 'Super4duper$sercret',
  },
  testHiringManager: {
    hiringManagerFirstName: 'Manager name',
    hiringManagerEmail: 'hiring-manager@email.com',
    hiringManagerLastName: 'Manager last name',
  },
  testOpenPositions: {
    jobTitle: 'Super Developer',
    projectName: 'Super project',
  },
  testSeeker: {
    firstName: 'John',
    lastName: 'Smith',
    password: 'Password123&',
    email: 'jsmith@example.com',
    desiredTitle: 'Software Engineer',
  },
  invalidEmails: [
    'plainaddress',
    '#@%^%#$@#$@#.com',
    '@example.com',
    'Joe Smith < email@example.com>',
    'email.example.com',
    'email@example @example.com',
    '.email @example.com',
    'email.@example.com',
    'email..email@example.com',
    'あいうえお@example.com',
    'email@example.com(Joe Smith)',
    'email@example',
    'email@-example.com',
    'email@111.222.333.44444',
    'email@example..com',
    'Abc..123@example.com',
    '"(),:;<>[]@example.com',
    'just"not"right@example.com',
    'this is"really"notallowed@example.com',
  ],
  validEmails: [
    'email@example.com',
    'firstname.lastname@example.com',
    'email@subdomain.example.com',
    '1234567890@example.com',
    'email@example-one.com',
    '_______@example.com',
    'email@example.name',
    'email@example.museum',
    'email@example.co.jp',
  ],
};
