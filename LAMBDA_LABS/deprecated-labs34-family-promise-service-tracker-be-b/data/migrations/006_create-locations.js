
exports.up = function(knex) {
    return knex.schema.createTable('locations', function (tbl) {
        tbl.increments('location_id').primary();
        tbl.string('name');
        tbl.string('country');
        tbl.string('state');
        tbl.string('city');
        tbl.string('zip');
        tbl.string('address').unique();
        tbl.timestamps(true, true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('locations');
};
