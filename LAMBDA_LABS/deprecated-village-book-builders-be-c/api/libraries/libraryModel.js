const db = require('../../data/db-config');

const findAll = async () => {
  return await db('libraries');
};

const findBy = (filter) => {
  return db('libraries').where(filter);
};

const findById = async (id) => {
  return db('libraries').where({ id }).first().select('*');
};

const create = async (profile) => {
  return db('libraries').insert(profile).returning('*');
};

const update = (id, profile) => {
  console.log(profile);
  return db('libraries')
    .where({ id: id })
    .first()
    .update(profile)
    .returning('*');
};

const remove = async (id) => {
  return await db('libraries').where({ id }).del();
};

const findOrCreateProfile = async (profileObj) => {
  const foundProfile = await findById(profileObj.id).then((profile) => profile);
  if (foundProfile) {
    return foundProfile;
  } else {
    return await create(profileObj).then((newProfile) => {
      return newProfile ? newProfile[0] : newProfile;
    });
  }
};

module.exports = {
  findAll,
  findBy,
  findById,
  create,
  update,
  remove,
  findOrCreateProfile,
};
