exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      id: 1,
      username: "Badmin",
      password: "$2a$10$BeUlzgN.uJacLsBNQIfyv.ED7FyFAaT0IRQSDMzW8LB7Us0qJAfUS", //password
      role: "admin",
      name: "Mr. Badmin",
      phone: "1234567890",
      email: "test1@email.com",
      address: "123 Admin Drive",
  },
  {
    id: 2,
    username: "Hadmin",
    password: "$2a$10$BeUlzgN.uJacLsBNQIfyv.ED7FyFAaT0IRQSDMzW8LB7Us0qJAfUS", //password
    role: "admin",
    name: "Mr. Hadmin",
    phone: "1234567890",
    email: "test2@email.com",
    address: "123 Admin Drive",
},
{
  id: 3,
  username: "Fadmin",
  password: "$2a$10$BeUlzgN.uJacLsBNQIfyv.ED7FyFAaT0IRQSDMzW8LB7Us0qJAfUS", //password
  role: "admin",
  name: "Mr. Fadmin",
  phone: "1234567890",
  email: "test3@email.com",
  address: "123 Admin Drive",
},
  ]);
};