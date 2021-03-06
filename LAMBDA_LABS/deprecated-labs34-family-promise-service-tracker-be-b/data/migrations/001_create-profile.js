exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', function (table) {
      table.string('profile_id').notNullable().unique().primary();
      table.string('email', 128).notNullable().unique();
      table.string('firstName', 128).notNullable();
      table.string('lastName', 128).notNullable();
      table.string('avatarUrl');
      table
        .enu('role', [
          'administrator',
          'program_manager',
          'service_provider'
        ])
        .notNullable()
        .defaultsTo('service_provider');
      table.timestamps(true, true);
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('profiles');
};
