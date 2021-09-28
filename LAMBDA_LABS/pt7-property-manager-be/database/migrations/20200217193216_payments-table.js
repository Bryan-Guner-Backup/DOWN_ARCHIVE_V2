exports.up = async function(knex) {
  await knex.schema.createTable("payments", tbl => {
    tbl.increments();
    tbl.string("payment_type", 128).notNullable();
    tbl.integer("payment_amount").notNullable();
    tbl.date("payment_date").notNullable();
    tbl.integer("reference_number");
    tbl.string("payment_category", 128).notNullable();
    tbl
      .integer("lease_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("leaseterms")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("payments");
};
