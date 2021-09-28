const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secrets = require('../config/secret');
const Users = require('../router/users/users-model');
const Mentors = require('../router/mentors/mentor-model');
const Mentees = require('../router/mentees/mentees-model');

// =================== User Register ========================================
// router.post('/register', (req,res) => {
//   let data = req.body;
//   const hash = bcrypt.hashSync(data.password,8);
//   data.password = hash;

//   Users.add(data)
//     .then(saved => {
//       const token = genToken(saved);
//       res.status(201).json({ created_user: saved, token: token });
//     })
//     .catch(error => {
//       console.log(error);
//       res.status(501).json(error);
//     });
// });
// ==================== User Login =========================================
// router.post('/login', (req,res) => {

//   const { email, password } = req.body;

//   Users.findBy({ email })
//     .first()
//     .then(log => {
//       if (log && bcrypt.compareSync(password, log.password)) {
//         const token = genToken(log);
//           res.status(200).json({ email: log.email, token: token });
//       } else {
//         res.status(401).json({ message: 'Invalid Credentials '});
//       }
//     })
//     .catch (err => {
//       console.log(err);
//       res.status(500).json({ message: 'user error', err });
//     });
// });
// ====================== Mentor Register =============================================
router.post('/register/mentor', (req,res) => {
  let data = req.body;
  const hash = bcrypt.hashSync(data.password,8);
  data.password = hash;

  Mentors.addMentor(data)
    .then(saved => {
      // const token = genToken(saved);
      res.status(201).json({ created_mentor: saved });
    })
    .catch(error => {
      console.log(error);
      res.status(501).json(error);
    });
});
// ========================= Mentor Login ========================================
router.post('/login/mentor', (req,res) => {

  const { email, password } = req.body;

  Mentors.findMentor({ email })
    .first()
    .then(log => {
      if (log && bcrypt.compareSync(password, log.password)) {
        // req.session.loggedin = true;
        const token = genToken(log);
          res.status(200).json({ email: log.email, token: token });
      } else {
        res.status(401).json({ message: 'Invalid Credentials '});
      }
    })
    .catch (err => {
      console.log(err);
      res.status(500).json({ message: 'user error', err });
    });
});
// ====================== Mentee Register =============================================
router.post('/register/mentee', (req,res) => {
  let data = req.body;
  const hash = bcrypt.hashSync(data.password,8);
  data.password = hash;

  Mentees.addMentee(data)
    .then(saved => {
      // const token = genToken(saved);
      res.status(201).json({ created_mentee: saved });
    })
    .catch(error => {
      console.log(error);
      res.status(501).json(error);
    });
});
// ========================= Mentor Login =========================
router.post('/login/mentee', (req,res) => {

  const { email, password } = req.body;

  Mentees.findMentee({ email })
    .first()
    .then(log => {
      if (log && bcrypt.compareSync(password, log.password)) {
        const token = genToken(log);
          res.status(200).json({ email: log.email, token: token, });
      } else {
        res.status(401).json({ message: 'Invalid Credentials '});
      }
    })
    .catch (err => {
      console.log(err);
      res.status(500).json({ message: 'user error', err });
    });
});

// ==================== User Token  ====================================================
function genToken(user) {
  const payload = {
    usersid: user.id,
    users: user.email
  };
  
  const options = { expiresIn: '1h' };

  return jwt.sign(payload, secrets.jwtSecret, options);
}
// ==========================================================================================
// ========================= Mentor Token ========================================
// function genTokenMentor(mentor) {
//   const payload = {
//     usersid: users.id,
//     users: users.email
//   };
  
//   const options = { expiresIn: '1h' };
//   const token = jwt.sign(payload, secrets.jwtSecret, options);

//   return token;
// }

module.exports = router;