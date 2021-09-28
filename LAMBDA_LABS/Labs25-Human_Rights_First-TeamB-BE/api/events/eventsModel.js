const db = require('../../data/db-config.js');

module.exports = {
  getTable,
  add,
};

function getTable() {
  return db('data as d').select('d.id as ID', 'd.event as Event');
}
function add(event) {
  return db('data')
    .select()
    .where('eventId', event.eventId)
    .then((rows) => {
      if (rows.length === 0) {
        return db('data').insert(event);
      } else {
        throw 'Error: Duplicate ID Encountered';
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
