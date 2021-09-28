/* eslint-disable no-use-before-define */
const db = require('../db-config');

module.exports = {
  getAllTracks,
  getEventTracks,
  getTrackById,
  addTrack,
  removeTrack,
  moveTrack,
  getEventPlaylist,
  removePlaylist
};

function getAllTracks() {
  return db('tracks');
}

async function getEventTracks(eventId) {
  const { rows } = await db.raw(
    `select t.*, count(v.isvoted) as votes from tracks as t LEFT JOIN votes as v ON t.id = v.track_id GROUP BY t.id HAVING t.event_id = ${eventId}`
  );
  return rows;
}

async function getTrackById(id) {
  const { rows } = await db.raw(
    `select t.*, count(v.isvoted) as votes from tracks as t LEFT JOIN votes as v ON t.id = v.track_id GROUP BY t.id HAVING t.id = ${id} `
  );
  return rows[0];
}

async function addTrack(newTrack) {
  const [id] = await db('tracks')
    .returning('id')
    .insert(newTrack);
  return getTrackById(id);
}

function removeTrack(id) {
  return db('tracks')
    .where({ id })
    .del();
}

async function getPlaylistById(id) {
  const { rows } = await db.raw(
    `select p.*, count(v.isvoted) as votes from playlist as p LEFT JOIN votes as v ON p.id = v.playlist_id GROUP BY p.id HAVING p.id = ${id}`
  );
  return rows[0];
}

// moves a particular track from track table to playlist table, and also removes it from the track table
async function moveTrack(id) {
  const track = await db('tracks')
    .select(
      'name',
      'spotify_id',
      'artist_name',
      'url',
      'isExplicit',
      'preview',
      'img',
      'event_id'
    )
    .where({ id })
    .first();
  const [idPlaylist] = await db('playlist')
    .returning('id')
    .insert(track);

  await db('votes')
    .where('track_id', id)
    .update({
      playlist_id: idPlaylist,
      track_id: null
    });

  await removeTrack(id);
  return getPlaylistById(idPlaylist);
}

// get playlist

async function getEventPlaylist(eventId) {
  const { rows } = await db.raw(
    `select p.*, count(v.isvoted) as votes from playlist as p LEFT JOIN votes as v ON p.id = v.playlist_id GROUP BY p.id HAVING p.event_id = ${eventId}`
  );
  return rows;
}

function removePlaylist(id) {
  return db('playlist')
    .where({ id })
    .del();
}
