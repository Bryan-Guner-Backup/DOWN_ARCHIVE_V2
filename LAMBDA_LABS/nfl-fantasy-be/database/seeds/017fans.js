exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("fans") 
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("fans").insert([
        {
          username: "tiffany87",
          password: "123456",
          email: "tiffany@email.com",
          first_name: "Tiffany",
          last_name: "Simionescu",
          city: "Greenville",
          state: "SC"
        }
      ])
    })
}