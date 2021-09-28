// const faker = require('faker');

// const createFakeQuestion = () => ({
//   question: faker.hacker.phrase() + '?',
//   survey_id: Math.floor(Math.random() * 7) + 1,
//   question_type: Math.floor(Math.random() * 3) + 1
// })

// exports.seed = function (knex) {
//   const fakeQuestions = [];
//   const desiredFakeQuestions = 80;

//   for (let i = 0; i < desiredFakeQuestions; i++) {
//     fakeQuestions.push(createFakeQuestion());
//   }

//   return knex('question').insert(fakeQuestions);
// };

exports.seed = function (knex) {
  return knex('question').insert([
    {
      question: "Community",
      survey_id: 1,
      question_type: 4
    },
    {
      question: 'Assesment',
      survey_id: 1,
      question_type: 3
    },
    {
      question: 'Date',
      survey_id: 1,
      question_type: 4
    },
    {
      question: 'Interviewer',
      survey_id: 1,
      question_type: 4
    },
    {
      question: 'Field Officer',
      survey_id: 1,
      question_type: 4
    },
    {
      question: 'Zone Leader',
      survey_id: 1,
      question_type: 4
    },
    {
      question: 'Zone',
      survey_id: 1,
      question_type: 4
    },
    {
      question: 'Family Name',
      survey_id: 1,
      question_type: 4
    },
    {
      question: 'New family or previously surveyed',
      survey_id: 1,
      question_type: 4
    },
    {
      question: 'Own home',
      survey_id: 1,
      question_type: 2
    },
    {
      question: 'Rent',
      survey_id: 1,
      question_type: 2
    },
    {
      question: 'Guest',
      survey_id: 1,
      question_type: 4
    },
    {
      question: 'FPP identity number',
      survey_id: 1,
      question_type: 4
    },
    {
      question: 'Head of household name',
      survey_id: 1,
      question_type: 4
    },
    {
      question: 'Head of household age',
      survey_id: 1,
      question_type: 3
    },
    {
      question: 'Head of household gender',
      survey_id: 1,
      question_type: 1
    },
    {
      question: 'Total number of people that live in the house',
      survey_id: 1,
      question_type: 3
    },
    {
      question: 'Is it a family of orphans',
      survey_id: 1,
      question_type: 2
    },
    {
      question: 'If yes, how many orphans live in the home?',
      survey_id: 1,
      question_type: 3
    },
    {
      question: 'Is it a fmaily with vulnerable children?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Is the head of household a child?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Number of deaths of adults over 18 since the last survey or within the last 12 months?',
      survey_id: 1,
      question_type: 3
    }, {
      question: 'Number of infant deaths since the last survey or within the last 12 months?',
      survey_id: 1,
      question_type: 3
    }, {
      question: 'Number of deaths of Children between 1-4 years of age?',
      survey_id: 1,
      question_type: 3
    }, {
      question: 'Number of deaths of Children older than 5?',
      survey_id: 1,
      question_type: 3
    }, {
      question: 'Did the mother’s death happen during or as a result childbirth?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'If yes, did it happen within 42 days of labor?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Does the house have electricity?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Does the roof need repair?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Do the walls need repair?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Does the house have a secure door?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Does the floor have cement or other material?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Does the family have an improved latrine?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Does the family have a bathroom?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Is the yard clean?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Does the family burn or bury all the garbage?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Does the home have some kind of plague (cockroaches, rats, worms, etc)?',
      survey_id: 1,
      question_type: 2
    },
    {
      question: 'Does the family have tarimba?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'The home is free of stagnant water?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Does the home have a kitchen?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Is inside the home clean?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Does the family have a small business?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Does the family have any income generation activity?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Does the family participate in saving, agriculture, credit association (microcredit)?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'At least one daily meal has vegetables, eggs, fish, or meat?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'The family harvested some product from the garden in the last planting season?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'How does the family treat drinking water? (Doesn’t treat, chlorine, boil, filter, other)',
      survey_id: 1,
      question_type: 1
    }, {
      question: 'Where does the family get their water? (Faucet, well, fountain, community cistern, river, other)',
      survey_id: 1,
      question_type: 1
    }, {
      question: 'Have there been any cases of physical violence within the family?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Are there people in the family who drink alcohol without moderation',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'Is the family active in any religious denomination?',
      survey_id: 1,
      question_type: 2
    }, {
      question: 'How do you think your family life will be next year? (Worse, the same, better)',
      survey_id: 1,
      question_type: 1
    }, {
      question: 'How do you think your communitys life will be next year? (Worse, the same, better)',
      survey_id: 1,
      question_type: 1
    },
    {
      question: 'Complete Name',
      survey_id: 2,
      question_type: 4
    },
    {
      question: 'Age',
      survey_id: 2,
      question_type: 3
    }, {
      question: 'Sex M/F',
      survey_id: 2,
      question_type: 1
    }, {
      question: 'Relationship with the head of household',
      survey_id: 2,
      question_type: 4
    }, {
      question: 'Marital Status',
      survey_id: 2,
      question_type: 4
    }, {
      question: 'Does this person wash their hands with soap after using the latrine?',
      survey_id: 2,
      question_type: 2
    }, {
      question: 'Does this person wash their hands with soap before eating?',
      survey_id: 2,
      question_type: 3
    }, {
      question: 'Does this person wear shoes, sandales, or any type of shoes regularly?',
      survey_id: 2,
      question_type: 3
    }, {
      question: 'Does this person brush their teeth at least once a day?',
      survey_id: 2,
      question_type: 2
    }, {
      question: 'Does this person have a mosquito net?',
      survey_id: 2,
      question_type: 2
    }, {
      question: 'Does this person eat at least 3 meals a day?',
      survey_id: 2,
      question_type: 2
    }, {
      question: 'Is this person registered?',
      survey_id: 2,
      question_type: 2
    }, {
      question: 'Has this person been tested for HIV in the past year?',
      survey_id: 2,
      question_type: 2
    }, {
      question: 'Does this person (between 6-17 years old) attend school?',
      survey_id: 2,
      question_type: 2
    }, {
      question: 'Is this person (over 18 years old) employed?',
      survey_id: 2,
      question_type: 2
    }, {
      question: 'If this person is older than 15 years old, are they literate?',
      survey_id: 2,
      question_type: 2
    }, {
      question: 'Is this person pregnant?',
      survey_id: 2,
      question_type: 2
    }, {
      question: 'If yes, is this person doing prenatal care?',
      survey_id: 2,
      question_type: 2
    }, {
      question: 'Has this person been sick within the last month?',
      survey_id: 2,
      question_type: 2
    }, {
      question: 'If yes, what are their symptoms?',
      survey_id: 2,
      question_type: 4
    }
  ]);
};