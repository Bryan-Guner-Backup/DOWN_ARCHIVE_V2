const knex = require('../../data/db-config');
const getAll = () => {
  return knex('statuses');
};

const getById = (id) => {
  return knex('statuses').where({ status_id: id });
};

const update = async (id, changes) => {
  await knex('statuses').where('status_id', id).update(changes);
  return getById(id);
};

const remove = async (id) => {
  await knex('statuses').where('status_id', id).del();
  return id
}

module.exports = {
    getAll,
    getById,
    update,
    remove
  };