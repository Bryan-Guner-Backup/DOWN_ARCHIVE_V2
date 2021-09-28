exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', function (table) {
      table.string('id').notNullable().unique().primary();
      table.string('email');
      table.string('name');
      table.string('avatarUrl');
      table.timestamps(true, true);
    })

    .createTable('incidents', function (table) {
      table.increments();
      table.string('location');
      table.float('longitude');
      table.float('latitude');
      table.string('url', 255).notNullable();
      table.string('title', 255).notNullable();
      table.string('date', 255).notNullable();
    });
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('incidents')
    .dropTableIfExists('profiles');
};
