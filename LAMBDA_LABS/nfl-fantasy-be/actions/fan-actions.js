// // Database Configuration File
const db = require('../database/dbConfig');

module.exports = {
  find,
  findByFilter,
  findById,
  update,
  add,
  remove
  // findPlayerById,
  // addPlayer,
  // removePlayer,
}

function find() {
  return db("fans");
}

function findByFilter(filter) {
  return db("fans")
    .where(filter)
    .first();
}

function findById(fan_id) {
  return db("fans")
    .where({ fan_id })
    .first();
}

async function add(fan) {
  const [fan_id] = await db("fans").insert(fan, "fan_id");

  return findById(fan_id);
}

function update(fan_id, changes) {
  return db("fans")
    .where({ fan_id })
    .update(changes, '*');
}

function remove(fan_id) {
  return db("fans")
    .where({ fan_id })
    .del()
}

// == POSSIBLE FUTURE RELEASE ACTIONS == //

// function findPlayerById(player_id) {
//   return db("players")
//     .where({ player_id })
// }

// async function addPlayer(player) {
//   const [player_id] = await db("fans").insert(player, "player_id");

//   return findById(player_id);
// }

// function removePlayer(fan_id, player_id) {
//   return db("fans")
//     .where({ fan_id })
//     .del({ player_id });
// }

// findPlayers - finds all players in fan's account