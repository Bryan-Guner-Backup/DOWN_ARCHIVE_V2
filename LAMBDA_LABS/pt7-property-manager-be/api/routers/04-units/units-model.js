const db = require("../../../database/db-config.js");

module.exports = {
  addUnit,
  findAllUnits,
  findUnitById,
  updateUnit,
  removeUnit,
  getPropertiesUnits,
};

function addUnit(unit) {
  return db("units")
    .insert(unit, "id")
    .then((ids) => ({ id: ids[0] }));
}

// prettier-ignore
function findAllUnits() {
  return (
    db("units")
    .select("units.id","number","renter_id","lease_id","property_id","units.manager_id","description","listing_price","date_available","parking","type","cooling","heating","pets","laundry","fees","sqft","elementary","middle","high","district","p.img","address","city","state","zip","country","firstName","lastName")
    .join("users as u", "units.manager_id", "=", "u.id")
    .join("property as p", "units.property_id", "=", "p.id")
  );

}

// prettier-ignore
function findUnitById(id) {
  return (
    db("units")
      .select("units.id","number","renter_id","lease_id","property_id","units.manager_id","description","listing_price","date_available","parking","type","cooling","heating","pets","laundry","fees","sqft","elementary","middle","high","district","p.img","address","city","state","zip","country","firstName","lastName")
      .join("users as u", "units.manager_id", "=", "u.id")
      .join("property as p", "units.property_id", "=", "p.id")
      .where({ "units.id": id })
      .first()
  );
}

function updateUnit(changes, id) {
  return db("units").where({ id }).update(changes);
}

function removeUnit(id) {
  return db("units").where({ id }).delete();
}

function getPropertiesUnits(id) {
  return db("units").where({ property_id: id });
}
