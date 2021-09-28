const households = [
  {
    household_name: "Smith's",
    household_size: 5,
    household_income: 42855.06,
    location_id: 1,
  },
  {
    household_name: "Gutierrez's",
    household_size: 3,
    household_income: 27832.02,
    location_id: 2,
  },
  {
    household_name: "Nguyen's",
    household_size: 2,
    household_income: 25657.12,
    location_id: 3,
  },
  {
    household_name: "Jacksons's",
    household_size: 4,
    household_income: 42855.06,
    location_id: 4,
  },
];

exports.seed = function (knex) {
  return knex('households').insert(households);
};
