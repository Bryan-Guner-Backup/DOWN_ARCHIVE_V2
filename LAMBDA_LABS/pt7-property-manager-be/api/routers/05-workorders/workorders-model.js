const db = require("../../../database/db-config.js");

module.exports = {
  addWorkOrder,
  findAllWorkOrder, 
  findWorkOrderById, 
  updateWorkOrder, 
  removeWorkOrder, 
};

function addWorkOrder(workOrder) {
    return db("workorder")
      .insert(workOrder, "id")
      .then(ids => ({ id: ids[0] }));
  }
  
  function findAllWorkOrder() {
    return db("workorder")
    .join("units as u", "u.id", "workorder.unit_id")
  }
  
  function findWorkOrderById(id) {
    return db("workorder")
      .join("units as u", "u.id", "workorder.unit_id")
      .where({ id })
      .first();
  }
  
  function updateWorkOrder(changes, id) {
    return db("workorder")
      .where({ id })
      .update(changes);
  }
  
  function removeWorkOrder(id) {
    return db("workorder")
      .where({ id })
      .delete();
  }