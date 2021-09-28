const db = require('../../data/db-config');

const findAll = async () => {
  return await db('teachers');
};

const findBy = (filter) => {
  return db('teachers').where(filter);
};

const findById = async (id) => {
  return db('teachers').where({ id }).first().select('*');
};

const create = async (profile) => {
  return db('teachers').insert(profile).returning('*');
};

const update = (id, profile) => {
  console.log(profile);
  return db('teachers').where({ id }).update(profile).returning('*');
};

const remove = async (id) => {
  return await db('teachers').where({ id }).del();
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
