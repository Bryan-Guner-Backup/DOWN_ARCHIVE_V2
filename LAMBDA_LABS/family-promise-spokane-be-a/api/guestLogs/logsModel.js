const db = require('../../data/db-config');

const findAll = async () => {
  return await db('logs');
};

const findBy = (filter) => {
  return db('logs').where(filter);
};

const findMemLogs = () => {
  const curDate = new Date().toDateString()
  return db('logs as l')
      .where({date: curDate,
      reservation_status: 'true'})
      .join('members as m', 'm.family_id','l.family_id')
      .select('*')

}

//a function to find log by its id
const findById = async (reservation_id) => {
  return db('logs').where({ reservation_id }).select('*');
};
const findByFamilyId = (family_id) => {
  return db('logs').where({ family_id: family_id });
};

const create = async (log) => {
  return db('logs').insert(log).returning('*');
};

const update = (reservation_id, log) => {
  return db('logs')
    .where({ reservation_id: reservation_id })
    .first()
    .update(log)
    .returning('*');
};

const remove = async (reservation_id) => {
  return db('logs').where({ reservation_id }).del();
};

const findOrCreateLog = async (logObj) => {
  const foundLog = await findById(logObj.id).then((log) => log);
  if (foundLog) {
    return foundLog;
  } else {
    return await create(logObj).then((newLog) => {
      return newLog ? newLog[0] : newLog;
    });
  }
};

module.exports = {
  findAll,
  findBy,
  findById,
  findByFamilyId,
  create,
  update,
  remove,
  findOrCreateLog,
  findMemLogs,
};
