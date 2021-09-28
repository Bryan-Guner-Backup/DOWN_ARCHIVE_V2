const db = require("../../../database/db-config.js");

module.exports = {
  add, // Adds property
  find, // Gets all properties
  findById, // Gets property by ID
  update, // Updates property
  remove, // Deletes property by ID
  findManagersProperties, // Gets all properties by manager ID
};

function add(property) {
  // Adds property
  return db("property")
    .insert(property, "id")
    .then((ids) => ({ id: ids[0] }));
}

// prettier-ignore
function find() {
  // Gets all properties
  return db("property as p")
    .join("users as u", "p.manager_id", "=", "u.id")
    .select("p.id","p.address","p.city","p.state","p.zip","p.country","p.img","p.manager_id","u.firstName","u.lastName");
}

function findById(id) {
  // Gets property by ID
  return db("property").where({ id }).first();
}

function update(changes, id) {
  // Updates property
  return db("property").where({ id }).update(changes);
}

function remove(id) {
  // Deletes property by ID
  return db("property").where({ id }).delete();
}

function findManagersProperties(id) {
  // Gets all properties by manager ID
  return db("property as p").where("p.manager_id", id);
}
