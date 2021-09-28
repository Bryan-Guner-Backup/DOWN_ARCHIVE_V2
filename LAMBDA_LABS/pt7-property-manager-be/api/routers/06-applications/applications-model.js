const db = require("../../../database/db-config.js");

module.exports = {
  addApp,
  findAllApps,
  findAppById,
  updateApp,
  removeApp,
};

function addApp(app) {
  return db("applications")
    .insert(app, "id")
    .then((ids) => ({ id: ids[0] }));
}

function findAllApps() {
  return db("applications");
}

function findAppById(id) {
  return db("applications").where({ id }).first();
}

function updateApp(changes, id) {
  return db("applications").where({ id }).update(changes);
}

function removeApp(id) {
  return db("applications").where({ id }).delete();
}
