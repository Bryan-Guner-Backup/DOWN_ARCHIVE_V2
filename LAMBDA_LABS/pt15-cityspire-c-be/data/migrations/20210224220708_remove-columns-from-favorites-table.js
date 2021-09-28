exports.up = function (knex) {
  return knex.schema.table('favorites', function (table) {
    table.dropColumn('city_id');
  });
};

exports.down = function (knex) {
  return knex.schema.table('favorite', (table) => {
    table.string('city_id').unique().notNullable();
  });
};
