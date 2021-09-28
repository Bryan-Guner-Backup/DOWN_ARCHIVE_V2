const db = require('../../data/db-config');

const findAll = async () => {
  return await db('favorites');
};

const findByUserId = async (users_id) => {
  return await db('favorites').where({ users_id }).select('*');
};

const findById = async (id) => {
  return await db('favorites').where({ id }).first().select('*');
};

const create = async (favorite) => {
  return await db('favorites').insert(favorite).returning('*');
};

const remove = async (id) => {
  return await db('favorites').where({ id }).del();
};

module.exports = {
  findAll,
  findByUserId,
  create,
  remove,
  findById,
};
