exports.up = function (knex) {
  return knex.schema.table("project_tag", (tbl) => {
    tbl.unique(["projectKey", "tagKey"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("project_tag");
};
