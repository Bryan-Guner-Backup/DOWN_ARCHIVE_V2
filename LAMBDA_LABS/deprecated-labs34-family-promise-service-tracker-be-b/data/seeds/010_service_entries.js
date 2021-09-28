const faker = require('faker');

const entries = [
  {
    service_date:'01-01-2020',
    service_time:'5:00',
    service_type_id: 1,
    recipient_id: 1,
    location_id: 1,
    status_id: 2,
    quantity: 3,
    unit: 'bus passes',
    value: 100.00,
  },
  {
    service_date:'01-01-2020',
    service_time:'5:00',
    service_type_id: 2,
    recipient_id: 2,
    location_id: 2,
    status_id: 4,
    quantity: 3,
    unit: 'meals',
    value: 425.00,
  },
  {
    service_date:'01-01-2020',
    service_time:'5:00',
    service_type_id: 3,
    recipient_id: 3,
    location_id: 3,
    status_id: 2,
    quantity: 3,
    unit: 'books',
    value: 250.00,
  },
  {
    service_date:'01-01-2020',
    service_time:'5:00',
    service_type_id: 2,
    recipient_id: 4,
    location_id: 4,
    status_id: 3,
    quantity: 3,
    unit: 'meals',
    value: 500.00,
  },
];

exports.seed = function (knex) {
  return knex('service_entries').insert(entries);
};
