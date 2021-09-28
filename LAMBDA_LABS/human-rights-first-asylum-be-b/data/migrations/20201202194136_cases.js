exports.up = function (knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('cases', function (table) {
      table.string('case_id').notNullable().primary();
      table
        .string('user_id')
        .references('user_id')
        .inTable('profiles')
        .onDelete('RESTRICT');
      table.string('case_url');
      table.string('case_number');
      table.date('case_date');
      table
        .integer('judge_id')
        .references('judge_id')
        .inTable('judges')
        .onDelete('RESTRICT');
      table.string('case_outcome'); // TBD may be another table with outcome codes
      table.string('country_of_origin'); // TBD may be another table with countries
      table.string('protected_grounds');
      table.string('application_type'); // TBD may be another table with app types
      table.string('case_origin_city'); // TBD may be another table with cities
      table.string('case_origin_state'); // TBD may be another table with states
      table.string('gender'); // TBD may be another table with genders
      table.string('applicant_language'); // TBD may be another table with languages
      table.string('indigenous_group');
      table.string('type_of_violence');
      table.boolean('appellate');
      table.boolean('filed_in_one_year');
      table.boolean('credible');
      table.string('status');
      table.timestamps(false, true);
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('cases');
};
