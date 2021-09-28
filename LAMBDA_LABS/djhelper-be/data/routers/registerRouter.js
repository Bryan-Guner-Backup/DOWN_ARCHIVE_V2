const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Dj = require('../models/models.js');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Register router is functioning.' });
});

// ================== Register a new DJ ======================
router.post('/dj', (req, res) => {
  const user = req.body;

  if (!user.username || !user.password || !user.email) {
    res.status(400).json({ message: 'Message: Missing required fields.' });
  }

  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Dj.findBy({ username: user.username })
    .first()
    .then(dj => {
      if (dj) {
        // Username already exists in the database
        res.status(409).json({ message: `DJ ${user.username} already exists` });
      } else {
        // Username is new. Add to database.
        Dj.addDJ(user)
          .then(saved => {
            res.status(201).json({
              id: saved.id,
              username: saved.username,
              name: saved.name,
              email: saved.email,
              phone: saved.phone,
              website: saved.website,
              bio: saved.bio,
              profile_pic_url: saved.profile_pic_url
            }); // then
          }) // addDJ
          .catch(error => {
            console.log(error);
            res.status(500).json(error);
          }); // catch
      } // else
    }) // then
    .catch(err => {
      res.status(500).json({ err });
    });
});

module.exports = router;
