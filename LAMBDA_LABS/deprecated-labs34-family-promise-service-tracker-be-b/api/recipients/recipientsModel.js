const knex = require('../../data/db-config');
const getAll = () => {
  return knex('recipients')
  .join('ethnicity', 'recipients.ethnicity_id', 'ethnicity.ethnicity_id')
  .join('households', 'households.household_id', 'recipients.household_id')
  .join('locations', 'locations.location_id', 'households.location_id')
  .select('recipients.recipient_id', 'recipients.firstname', 'recipients.middle', 'recipients.lastname', 'ethnicity', 'household_name as household', 'household_size', 'household_income', 'locations.name as location', 'locations.state', 'locations.city','locations.zip', 'locations.address', 'email', 'phone', 'age', 'veteran', 'mental_status', 'recipients.created_at', 'recipients.updated_at');
};

const getById = (id) => {
  return knex('recipients').where({ recipient_id: id })
  .join('ethnicity', 'recipients.ethnicity_id', 'ethnicity.ethnicity_id')
  .join('households', 'households.household_id', 'recipients.household_id')
  .join('locations', 'locations.location_id', 'households.location_id')
  .select('recipients.recipient_id', 'recipients.firstname', 'recipients.middle', 'recipients.lastname', 'ethnicity', 'household_name as household', 'household_size', 'household_income', 'locations.name as location', 'locations.state', 'locations.city','locations.zip', 'locations.address', 'email', 'phone', 'age', 'veteran', 'mental_status', 'recipients.created_at', 'recipients.updated_at').first();
};

const create = async (newRecipient) => {
  const id = await knex('recipients').insert(newRecipient, 'recipient_id')
  console.log(id)
  return getById(id[0])
}

const update = async (id, changes) => {
  await knex('recipients').where('recipient_id', id).update(changes);
  return getById(id);
};

const remove = async (id) => {
  await knex('household_members').where('recipient_id', id).del();
  await knex('recipients').where('recipient_id', id).del();
  return id
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
