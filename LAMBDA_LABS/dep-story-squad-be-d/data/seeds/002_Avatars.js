const avatars = [
  {
    AvatarURL:
      'https://test-image-bucket-14579.s3.amazonaws.com/Avatars/black_helmet_lightning_bolt.svg',
  },
  {
    AvatarURL:
      'https://test-image-bucket-14579.s3.amazonaws.com/Avatars/blonde_hair_red_uniform.svg',
  },
  {
    AvatarURL:
      'https://test-image-bucket-14579.s3.amazonaws.com/Avatars/brunette_hair_red_glasses.svg',
  },
  {
    AvatarURL:
      'https://test-image-bucket-14579.s3.amazonaws.com/Avatars/purple_mask_blue_uniform.svg',
  },
  {
    AvatarURL:
      'https://test-image-bucket-14579.s3.amazonaws.com/Avatars/tin_hat.svg',
  },
];

exports.seed = function (knex) {
  // Inserts seed entries
  return knex('Avatars').insert(avatars);
};
