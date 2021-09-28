exports.up = function (knex) {
  return knex.schema.table('favorites', function (table) {
    table.string('city');
    table.string('state');
    table.integer('zip');
  });
};

exports.down = function (knex) {
  return knex.schema.table('favorite', (table) => {
    table.dropColumn('city');
    table.dropColumn('state');
    table.dropColumn('zip');
  });
};
