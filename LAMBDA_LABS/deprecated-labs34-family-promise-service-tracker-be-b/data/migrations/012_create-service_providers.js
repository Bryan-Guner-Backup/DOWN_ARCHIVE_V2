exports.up = function (knex) {
  return knex.schema.createTable('service_providers', (tbl) => {
    tbl.increments('service_provider_id').primary();
    tbl
      .integer('service_type_id')
      .unsigned()
      .notNullable()
      .references('service_type_id')
      .inTable('service_types')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .string('profile_id')
      .notNullable()
      .references('profile_id')
      .inTable('profiles')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('services_providers');
};
