exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('persons')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert([
        { name: 'Tony Stark', email: 'Tony@test.com', password: 'password' },
        { name: 'Steve Rogers', email: 'Steve@test.com', password: 'password' },
        { name: 'Thor Odinson', email: 'Thor@test.com', password: 'password' },
        { name: 'Bruce Banner', email: 'Bruce@test.com', password: 'password' },
        { name: 'Clint Barton', email: 'Clint@test.com', password: 'password' },
        {
          name: 'Natasha Romanoff',
          email: 'Natasha@test.com',
          password: 'password',
        },
        { name: 'Peter Parker', email: 'Peter@test.com', password: 'password' },
        {
          name: 'Wanda Maximoff',
          email: 'Wanda@test.com',
          password: 'password',
        },
        {
          name: 'Pietro Maximoff',
          email: 'Pietro@test.com',
          password: 'password',
        },
        {
          name: 'Victor Shade',
          email: 'Victor@test.com',
          password: 'password',
        },
        { name: 'Hank Pym', email: 'Hank@test.com', password: 'password' },
        { name: 'Bucky Barnes', email: 'Bucky@test.com', password: 'password' },
      ])
    })
}
