
exports.up = function(knex) {
    return knex.schema.createTable('ethnicity', function (tbl) {
        tbl.increments('ethnicity_id').primary();
        tbl.string('ethnicity').notNullable().unique();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ethnicity');
};
