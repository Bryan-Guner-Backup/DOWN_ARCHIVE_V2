const eventData = require('../jsonData/events.json');

console.log(`${eventData.length} events are being inserted`);

const createEvent = event => {
  return {
    dj_id: event.dj_id,
    name: event.name,
    date: event.date,
    img_url: event.img_url,
    isExplicit: false,
    notes: event.notes
  };
};

exports.seed = async function(knex) {
  const eventContainer = [];
  eventData.map(event => eventContainer.push(createEvent(event)));

  await knex('events').insert(eventContainer);
};
