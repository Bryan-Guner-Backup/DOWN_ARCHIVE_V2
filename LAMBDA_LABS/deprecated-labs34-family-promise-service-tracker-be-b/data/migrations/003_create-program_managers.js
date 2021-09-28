exports.up = function (knex) {
  return knex.schema.createTable('program_managers', (tbl) => {
    tbl.increments('program_manager_id').primary();
    tbl
      .integer('program_id')
      .unsigned()
      .notNullable()
      .references('program_id')
      .inTable('programs')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .string('profile_id')
      .unsigned()
      .notNullable()
      .references('profile_id')
      .inTable('profiles')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('programs_users');
};
