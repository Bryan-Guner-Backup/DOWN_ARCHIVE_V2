const faker = require('faker');

// * This data was manually mocked based off of what we could find online about these judges
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('judges')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('judges').insert([
        {
          judge_id: 1,
          first_name: 'David',
          last_name: 'Crosland',
          judge_county: 'Baltimore',
          judge_image_url: faker.image.avatar(),
          appointed_by: 'Janet Reno',
          date_appointed: 'May 1, 1997',
          biography: 'https://www.justice.gov/eoir/BaltimoreNatzCer03072012',
        },
        {
          judge_id: 2,
          first_name: 'Patricia',
          last_name: 'Cole',
          judge_county: 'Virginia Falls',
          judge_image_url: faker.image.avatar(),
          appointed_by: 'Janet Reno',
          date_appointed: 'July 1, 1995',
          biography:
            'Appears to be retired? https://www.justice.gov/sites/default/files/eoir/legacy/2014/02/04/BIA_Bios_February2014.pdf',
        },
        {
          judge_id: 3,
          first_name: 'David',
          last_name: 'Holmes',
          judge_county: 'Virginia Falls',
          judge_image_url: faker.image.avatar(),
          appointed_by: 'Janet Reno',
          date_appointed: 'June 1, 1995',
          biography:
            'Appears to be retired? https://www.justice.gov/sites/default/files/eoir/legacy/2014/02/04/BIA_Bios_February2014.pdf',
        },
        {
          judge_id: 4,
          first_name: 'Neil',
          last_name: 'Miller',
          judge_county: 'Virginia Falls',
          judge_image_url: faker.image.avatar(),
          appointed_by: 'Janet Reno',
          date_appointed: 'July 1, 1999',
          biography:
            'Appears to be retired? https://www.justice.gov/sites/default/files/eoir/legacy/2014/02/04/BIA_Bios_February2014.pdf',
        },
        {
          judge_id: 5,
          first_name: 'Linda',
          last_name: 'Wendtland',
          judge_county: 'Virginia Falls',
          judge_image_url: faker.image.avatar(),
          appointed_by: '(unavailable)',
          date_appointed: 'August 1, 2008',
          biography:
            'Appears to be retired? https://www.justice.gov/archive/opa/pr/2008/December/08-eoir-1110.html',
        },
        {
          judge_id: 6,
          first_name: 'Charles',
          last_name: 'Adkins-Blanch',
          judge_county: 'Virginia Falls',
          judge_image_url: faker.image.avatar(),
          appointed_by: 'Eric Holder',
          date_appointed: 'January 1, 2013',
          biography:
            'https://www.justice.gov/eoir/board-of-immigration-appeals-bios#CharlesAdkins-Blanch',
        },
        {
          judge_id: 7,
          first_name: 'Gary',
          last_name: 'Malphrus',
          judge_county: 'Virginia Falls',
          judge_image_url: faker.image.avatar(),
          appointed_by: 'William P. Barr',
          date_appointed: 'September 1, 2020',
          biography:
            'https://www.justice.gov/eoir/board-of-immigration-appeals-bios#GarryMalphrus',
        },
        {
          judge_id: 8,
          first_name: 'John',
          last_name: 'Guendelsberger',
          judge_county: 'Virginia Falls',
          judge_image_url: faker.image.avatar(),
          appointed_by: 'Eric H. Holder, Jr.',
          date_appointed: 'August 1, 2009',
          biography:
            'Appears to be retired?  https://www.justice.gov/opa/pr/attorney-general-holder-appoints-new-member-board-immigration-appeals',
        },
      ]);
    });
};
