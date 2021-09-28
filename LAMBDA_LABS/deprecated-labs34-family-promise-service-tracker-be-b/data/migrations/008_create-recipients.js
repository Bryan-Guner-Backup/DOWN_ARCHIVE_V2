
exports.up = function(knex) {
    return knex.schema.createTable('recipients', function (tbl) {
        tbl.increments('recipient_id').primary();
        tbl.string('firstname', 128).notNullable();
        tbl.string('middle', 128);
        tbl.string('lastname', 128).notNullable();
        tbl
        .integer('ethnicity_id')
        .unsigned()
        .notNullable()
        .references('ethnicity_id')
        .inTable('ethnicity')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl
        .integer('household_id')
        .unsigned()
        .references('household_id')
        .inTable('households')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl.string('email', 128)
        tbl.string('phone', 128)
        tbl.integer('age').unsigned()
        tbl.boolean('veteran')
        tbl.string('mental_status', 128);
        tbl.timestamps(true, true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipients');
};
