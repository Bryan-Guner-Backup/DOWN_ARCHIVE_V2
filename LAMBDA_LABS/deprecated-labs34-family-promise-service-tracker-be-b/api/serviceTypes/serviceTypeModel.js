const knex = require('../../data/db-config');

// const findAll = async () => {
//   return await knex('service_types')
//     .leftJoin('service_providers', {
//       'service_types.service_type_id': 'service_providers.service_type_id',
//     })
//     .leftJoin('profiles', {
//       'service_providers.profile_id': 'profiles.profile_id',
//     })
//     .select(
//       knex.raw('service_types.*, json_agg(profiles.*) as service_providers')
//     )
//     .groupBy('service_types.service_type_id');
// };
const findAll = async () => {
  return await knex('service_types')
    .leftJoin('service_providers', {
      'service_types.service_type_id': 'service_providers.service_type_id',
    })
    .leftJoin('programs', {
      'service_types.program_id': 'programs.program_id', 
    })
    .leftJoin('profiles', {
      'service_providers.profile_id': 'profiles.profile_id',
    })
    .select(
      knex.raw('service_types.service_type_id, service_types.name as service, service_types.description, array_agg(programs.name) as program, json_agg(profiles.*) as service_providers')
    )
    .groupBy('service_types.service_type_id');
};

const findById = async (id) => {
  return await knex('service_types')
    .leftJoin('service_providers', {
      'service_types.service_type_id': 'service_providers.service_type_id',
    })
    .leftJoin('programs', {
      'service_types.program_id': 'programs.program_id', 
    })
    .leftJoin('profiles', {
      'service_providers.profile_id': 'profiles.profile_id',
    })
    .select(
      knex.raw('service_types.service_type_id, service_types.name as service, service_types.description, array_agg(programs.name) as program, json_agg(profiles.*) as service_providers')
    )
    .where({ 'service_types.service_type_id': id })
    .groupBy('service_types.service_type_id')
    .first();
};

const create = async (serviceType) => {
  const { service_providers_arr, ...newServiceType } = serviceType;
  let newServiceTypeId
  try {
    const createdServiceType = await knex('service_types')
    .insert(newServiceType)
    .returning('*')
    newServiceTypeId = createdServiceType[0].service_type_id;
    console.log(newServiceTypeId)
    if (service_providers_arr && service_providers_arr.length > 0) {
      while (service_providers_arr.length > 0){
        console.log(service_providers_arr)
        await knex('service_providers').insert({
          service_type_id: newServiceTypeId,
          profile_id: service_providers_arr[service_providers_arr.length - 1]
        })
        service_providers_arr.pop()
      }
    }
    return await findById(newServiceTypeId);
  }catch(err){
    throw new Error(err)
  }
}

const update = async (id, updates) => {
  // separate out the service_providers array for junction table insert
  const { service_providers_arr, ...serviceType } = updates;

  try {
    await knex.transaction(async (trx) => {
      // only make updates to service_types table if request includes updates
      if (Object.keys(serviceType).length > 0) {
        await trx('service_types').where('service_type_id', id).first().update(serviceType);
      }

      // if request includes providers_array, wipe existing associations
      if (service_providers_arr) {
        await trx('service_providers').where('service_type_id', id).delete();
      }
      // then insert new associations if there are any
      if (service_providers_arr && service_providers_arr.length > 0) {
        while (service_providers_arr.length > 0){
          console.log(service_providers_arr)
          await knex('service_providers').insert({
            service_type_id: newServiceTypeId,
            profile_id: service_providers_arr[service_providers_arr.length - 1]
          })
          service_providers_arr.pop()
        }
      }
    });
    // return promise with the updated service type and associated providers
    return await findById(id);
  } catch (err) {
    // if transaction fails, forward the error to the router for handling
    throw new Error(err);
  }
};

const remove = async (id) => {
  await knex('service_providers').where('service_type_id', id).del()
  await knex('service_types').where('service_type_id', id).del();
  return id
}

module.exports = {
  knex,
  findAll,
  findById,
  create,
  update,
  remove
};
