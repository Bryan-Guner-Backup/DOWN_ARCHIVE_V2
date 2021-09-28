exports.up = function (knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('judges', function (table) {
      table.increments('judge_id');
      table.string('first_name');
      table.string('last_name');
      table.string('judge_county');
      table.string('judge_image_url');
      table.date('date_appointed');
      table.date('birthdate');
      table.string('biography');
      table.string('appointed_by'); // TBD may be another table with appointers
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('judges');
};
