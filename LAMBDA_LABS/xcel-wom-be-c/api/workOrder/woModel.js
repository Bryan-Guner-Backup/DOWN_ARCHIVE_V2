const db = require('../../data/db-config');

const findAll = async () => {
  return await db('workOrders');
};

const findBy = async (filter) => {
  return db('workOrders').where(filter);
};

const findById = async (id) => {
  return db('workOrders').where({ id }).first().select('*');
};

const create = async (wo) => {
  return db('workOrders').insert(wo).returning('*');
};

const update = (id, wo) => {
  console.log(wo);

  return db('workOrders').where({ id: id }).first().update(wo).returning('*');
};

const remove = async (id) => {
  return await db('workOrders').where({ id }).del();
};

module.exports = {
  findAll,
  findBy,
  findById,
  create,
  update,
  remove,
};
