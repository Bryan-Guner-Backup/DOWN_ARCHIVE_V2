
exports.seed = function(knex, Promise) {
  return knex("project").insert([
    {
      id: 1,
      project: "Badminhj jksb jfdjjb hj fdkshvjb kjv kjsdfhmnv kjsdhbv kjsdfhbv kjsdbv ksdjfhbv sk",
      email: "test1@email.com",
    },
    {
      id: 2,
      project: "j hsvkj hv hjbfd jhbj bhj bksfd bksdjfnhbksv jhkvjs vf",
      email: "test2@email.com",
    },
    {
      id: 3,
      project: "Fadmin jsdfv jshv jhsf dhjvbsf dkjhvbsk fdjhvbksjdhbksvjhkv jshv kjhv kjshv kjh dfhvb hfbvhfbv hfbv fv f ",
      email: "test3@email.com",
    },
  ]);
};