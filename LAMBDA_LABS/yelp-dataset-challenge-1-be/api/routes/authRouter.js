const router = require('express').Router();
const bcrypt = require('bcryptjs');

const tokenService = require('../../helpers/auth/tokenService');
const db = require('../models/userModels');

//=========================================== Register API
//turn this into async
router.post('/register', async (req, res) => {
  try {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    id = await db.add(user);
    res.status(201).json({message: "User created with id of ", id})

  } catch (error) {
    res.status(500).json(error);
  }
});

//=========================================== Login API
router.post('/login', (req, res) => {
    let { email, password } = req.body;
  //added user id to returned info
    db.findBy({ email })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = tokenService.generateToken(user);
          const userId = user.id;
          res.status(200).json({
            message: `Welcome ${user.username}!`, userId,
            token
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = router;