const db = require('../data/dbConfig.js');

const filterFind = (filter) => {
  console.log(filter);
  return db('jobs')
    .where(filter);
}

const findById = id => {
  return db('jobs')
    .where({id})
    .first();
}

// Find jobs by poster
const findJobsByCreator = id => {
  return db('jobs')
    .where({creator: id})
}

// Create job
const createJob = async (creatorId, job) => {
  job.creator = creatorId;
  const [id] = await db('jobs')
    .insert(job)
    .returning('id');
  return findById(id);
}

// Update specified job
const updateJob = async (jobId, job) => {
  const [id] = await db('jobs')
    .where({id: jobId})
    .first()
    .update(job)
    .returning('id');
  return findById(id);
}

const removeJob = async id => {
  return await db('jobs')
    .where({id})
    .del();
}



module.exports = {
  filterFind,
  findById,
  findJobsByCreator,
  createJob,
  updateJob,
  removeJob
}