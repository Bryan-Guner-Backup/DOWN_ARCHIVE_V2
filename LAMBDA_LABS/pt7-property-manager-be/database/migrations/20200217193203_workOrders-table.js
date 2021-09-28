exports.up = async function(knex) {
  await knex.schema.createTable("workorders", tbl => {
    tbl.increments();
    tbl.string("work_order_type", 128).notNullable();
    tbl.date("work_order_date").notNullable();
    tbl.date("start_date").notNullable();
    tbl.date("completion_date").notNullable();
    tbl.string("priority", 128).notNullable();
    tbl.string("problem_description", 128);
    tbl.string("permission_to_enter", 128).notNullable();
    tbl.string("vendor", 128);
    tbl
      .integer("units_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("units")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("workorders");
};
