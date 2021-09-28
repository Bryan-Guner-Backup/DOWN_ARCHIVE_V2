const knex = require('../../data/db-config');

const getAll = () => {
  return knex('service_entries as se')
  .join('service_types as st', 'st.service_type_id', 'se.service_type_id')
  .join('recipients as r', 'r.recipient_id', 'se.recipient_id')
  .join('locations as l', 'l.location_id', 'se.location_id')
  .join('statuses as s', 's.status_id', 'se.status_id')
  .select('se.service_entries_id', 'se.service_date', 'se.service_time', 'se.quantity', 'se.unit', 'se.value', 'st.name as service_name', 'r.firstname', 'r.lastname', 'r.age', 'r.email', 'r.phone', 'l.name as location', 'l.state', 'l.city', 'l.zip', 'l.address', 's.status');
};

const getById = (id) => {
  return knex('service_entries as se').where({'se.service_entries_id': id})
  .join('service_types as st', 'st.service_type_id', 'se.service_type_id')
  .join('recipients as r', 'r.recipient_id', 'se.recipient_id')
  .join('locations as l', 'l.location_id', 'se.location_id')
  .join('statuses as s', 's.status_id', 'se.status_id')
  .select('se.service_date', 'se.service_time', 'se.quantity', 'se.unit', 'se.value', 'st.name as service_name', 'r.firstname', 'r.lastname', 'r.age', 'r.email', 'r.phone', 'l.name as location', 'l.state', 'l.city', 'l.zip', 'l.address', 's.status')
  .first();
};

const create = async (serviceEntry) => {
  const [id] = await knex('service_entries').insert(
    serviceEntry,
    'service_entries_id'
  );
  return getById(id);
};

const update = async (id, changes) => {
  await knex('service_entries').where('service_entries_id', id).update(changes);
  return getById(id);
};

const remove = async (id) => {
  return await knex('service_entries').where('service_entries_id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
