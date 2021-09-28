exports.up = function (knex) {
  return knex.schema.createTable('households', function (tbl) {
    tbl.increments('household_id').primary();
    tbl.string('household_name', 128).notNullable().unique();
    tbl.integer('household_size');
    tbl.decimal('household_income');
    tbl
      .integer('location_id')
      .unsigned()
      .notNullable()
      .references('location_id')
      .inTable('locations')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('households');
};
