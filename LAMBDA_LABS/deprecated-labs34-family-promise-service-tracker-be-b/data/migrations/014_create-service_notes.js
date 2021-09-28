exports.up = function (knex) {
  return knex.schema.createTable('service_notes', function (tbl) {
    tbl.increments('service_notes_id').primary();
    tbl
      .integer('service_entries_id')
      .unsigned()
      .notNullable()
      .references('service_entries_id')
      .inTable('service_entries')
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
    tbl.text('service_note');
    tbl.date('service_reminder');
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('service_notes');
};
