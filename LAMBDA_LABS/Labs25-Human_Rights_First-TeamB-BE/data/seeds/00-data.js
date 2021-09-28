const file = require('../incidents.json');

exports.seed = function (knex) {
  return knex('data')
    .truncate()
    .then(function () {
      return knex('data').insert(getData());
    });
};

function getData() {
  const arr = [];
  const data = file.data;
  for (let item in data) {
    arr.push({
      eventId: data[item].id,
      event: data[item],
    });
  }
  return arr;
}
