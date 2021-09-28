/* eslint-disable no-use-before-define */
const db = require('../db-config');

module.exports = {
  getAllDJs,
  addDJ,
  findBy,
  findDJById,
  updateDJ,
  removeDJ,

  getAllEvents,
  addEvent,
  updateEvent,
  removeEvent,
  findEventById
};

// ----------------- DJs -----------------

// Get every registered DJ's information
function getAllDJs() {
  return db('djs');
}

// Get a specific DJ by id
async function findDJById(id) {
  return db('djs')
    .where({ id })
    .first();
}

async function addDJ(info) {
  const [id] = await db('djs')
    .returning('id') // This line is REQUIRED for PostgreSQL
    .insert(info);
  return findDJById(id);
}

// Login for a DJ
function findBy(filter) {
  return db('djs').where(filter);
}

// Update DJ
function updateDJ(id, updatedUser) {
  return db('djs')
    .where({ id })
    .update(updatedUser)
    .then(() => {
      return findDJById(id);
    });
}

// Completely remove a DJ
function removeDJ(id) {
  return db('djs')
    .where('id', id)
    .del();
}

// ----------------- Events -----------------

// All Events
function getAllEvents() {
  return db('events');
}

// Get a specific Event by id
async function findEventById(id) {
  return db('events')
    .where({ id })
    .first();
}

// Add an Event
async function addEvent(info) {
  const [id] = await db('events')
    .returning('id') // Required PostgreSQL line <---
    .insert(info);
  return findEventById(id);
}

// Update an event
async function updateEvent(id, updatedEvent) {
  return db('events')
    .where({ id })
    .update(updatedEvent)
    .then(() => {
      return findEventById(id);
    });
}

// Completely remove an event
async function removeEvent(id) {
  return db('events')
    .where({ id })
    .del();
}
