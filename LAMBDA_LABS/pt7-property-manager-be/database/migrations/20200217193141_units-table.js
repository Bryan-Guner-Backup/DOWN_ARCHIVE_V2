// prettier-ignore
exports.up = async function (knex) {
  await knex.schema.createTable("units", (tbl) => {
    tbl.increments();
    tbl.string("number").notNullable();
    tbl.integer("renter_id").unsigned().references("id").inTable("users").onUpdate("CASCADE").onDelete("CASCADE");
    tbl.integer("lease_id").unsigned().references("id").inTable("leaseterms").onUpdate("CASCADE").onDelete("CASCADE");
    tbl.integer("property_id").unsigned().notNullable().references("id").inTable("property").onUpdate("CASCADE").onDelete("CASCADE");
    tbl.integer("manager_id").unsigned().notNullable().references("id").inTable("users").onUpdate("CASCADE").onDelete("CASCADE");
    tbl.string("description", 255);
    tbl.integer("listing_price");
    tbl.date("date_available").notNullable();
    tbl.string("parking", 128);
    tbl.string("type", 128).notNullable();
    tbl.string("cooling", 128);
    tbl.string("heating", 128);
    tbl.string("pets", 128);
    tbl.string("laundry", 128);
    tbl.float("fees", 8, 2).notNullable();
    tbl.integer("sqft").notNullable();
    tbl.string("elementary", 128);
    tbl.string("middle", 128);
    tbl.string("high", 128);
    tbl.string("district", 128);
  });
};
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("units");
};
