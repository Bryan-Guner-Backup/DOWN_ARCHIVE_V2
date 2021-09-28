const djData = require('../jsonData/djs.json');

console.log(`${djData.length} DJs are being inserted`);

const createDj = dj => {
  return {
    username: dj.username,
    password: dj.password,
    name: dj.name,
    email: dj.email,
    phone: dj.phone,
    website: dj.website,
    bio: dj.bio,
    profile_pic_url: dj.profile_pic_url
  };
};

exports.seed = async function(knex) {
  const djContainer = [];

  djData.map(dj => djContainer.push(createDj(dj)));
  await knex('djs').insert(djContainer);
};
