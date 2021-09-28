const knex = require('../../data/db-config');

const findAll = async () => {
  return await knex('programs');
};

const findById = (id) => {
  return knex('programs').where({ program_id: id });
};

const findByProfileId = async (profile_id) => {
  // need access to current logged in profile
  /*
    use that profile_id to ask Programs_Managers...
    which programs it is related to
  */
  const p_mTable = await knex('program_managers').where({
    profile_id: profile_id,
  });
  // use forEach to return all profile_id's
  let idArr = [];
  p_mTable.forEach((id) => {
    idArr.push(id.program_id);
  });

  // return from Programs programs that...
  // match any of the numbers in the forEach

  return knex('programs').whereIn('program_id', idArr);

  // return knex('programs').where({ program_id: p_mTable[0].program_id });
};

const updateById = async (id, changes) => {
  // const intId = parseInt(id);
  await knex('programs')
    .update({
      name: changes.name,
      type: changes.type,
      description: changes.description,
    })
    .where({ program_id: id });

  return knex('programs').where({ program_id: id });
};

const deleteById = async (id) => {
  // delete first from program_managers
  await knex('program_managers').delete().where({ program_id: id });
  // then delete from service_provider_pairs
  await knex('service_provider_pairs')
    .delete()
    .where({ service_entries_id: id });

  // then delete from service_notes_service_entries_id_foreign
  // await knex('service_notes_service_entries_id_foreign').delete().where({ });

  // then delete from service_notes
  await knex('service_notes').delete().where({ service_entries_id: id });

  // then delete from service_entries
  await knex('service_entries').delete().where({ service_type_id: id });

  // then delete from service_providers_service_type_id_foreign
  await knex('service_providers').delete().where({ service_provider_id: id });

  // then delete service type id from service_types
  await knex('service_types').delete().where({ service_type_id: id });

  // then service_types
  await knex('service_types').delete().where({ program_id: id });

  // then Programs
  return await knex('programs').delete().where({ program_id: id });
};
module.exports = {
  findAll,
  findById,
  findByProfileId,
  updateById,
  deleteById,
};
