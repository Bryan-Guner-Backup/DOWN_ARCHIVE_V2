exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('incidents')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('incidents').insert([
        {
          id: 1,
          location: 'Portland, OR',
          longitude: '-122.676483',
          latitude: '45.523064',
          url: 'https://twitter.com/ACLU/status/1292992629647515648',
          title: 'Police in Portland use excessive force',
          date: 'Aug 10, 2020',
        },
        {
          id: 2,
          location: 'New York, NY',
          longitude: '-73.935242',
          latitude: '40.730610',
          url: 'https://twitter.com/AliWatkins/status/1267275794822414344',
          title: 'Police in New York use excessive force',
          date: 'May 31, 2020',
        },
        {
          id: 3,
          location: 'Chicago, IL',
          longitude: '-87.623177',
          latitude: '41.881832',
          url: 'https://twitter.com/may20p/status/1292848915855872006',
          title: 'Police in Chicago use excessive force',
          date: 'May 31, 2020',
        },
      ]);
    });
};
