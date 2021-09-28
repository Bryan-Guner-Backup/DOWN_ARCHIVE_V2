const db = require("../../../database/db-config.js");

module.exports = {
  addLeaseTerm,
  findAllLeaseTerm,
  findLeaseTermById,
  updateLeaseTerm,
  removeLeaseTerm,
};

function addLeaseTerm(leaseterms) {
  return db("leaseterms")
    .insert(leaseterms, "id")
    .then((ids) => ({ id: ids[0] }));
}

function findAllLeaseTerm() {
  return db("leaseterms");
}

function findLeaseTermById(id) {
  return db("leaseterms").where({ id }).first();
}

function updateLeaseTerm(changes, id) {
  return db("leaseterms").where({ id }).update(changes);
}

function removeLeaseTerm(id) {
  return db("leaseterms").where({ id }).delete();
}
