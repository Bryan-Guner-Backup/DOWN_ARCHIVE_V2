exports.up = function (knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('bookmark_judges', function (table) {
      table.increments('bookmark_judges_id');
      table
        .string('user_id')
        .references('user_id')
        .inTable('profiles')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('judge_id')
        .references('judge_id')
        .inTable('judges')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('bookmark_judges');
};
