exports.up = (knex) => {
  return knex.schema.createTable('service_types', function (tbl) {
    tbl.increments('service_type_id').primary();
    tbl.string('name', 128).notNullable().unique();
    tbl.text('description');
    tbl
      .integer('program_id')
      .unsigned()
      .notNullable()
      .references('program_id')
      .inTable('programs')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('service_providers').then(() => {
    return knex.schema.dropTableIfExists('service_types')
  })
}
