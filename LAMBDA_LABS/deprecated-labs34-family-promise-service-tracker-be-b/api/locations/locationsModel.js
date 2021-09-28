const knex = require('../../data/db-config');
const getAll = () => {
  return knex('locations');
};

const getById = (id) => {
  return knex('locations').where({ location_id: id });
};

const create = async (newLocation) => {
  const id = await knex('locations').insert(newLocation, 'location_id')
  console.log(id)
  return getById(id[0])
}

const update = async (id, changes) => {
  await knex('locations').where('location_id', id).update(changes);
  return getById(id);
};

const remove = async (id) => {
  await knex('locations').where('location_id', id).del();
  return id
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
