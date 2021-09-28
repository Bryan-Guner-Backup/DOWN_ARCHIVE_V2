const router = require('express').Router();
const Dj = require('../../models/models.js');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'DJ router is functioning.' });
});

// ====================== DJ Routes =========================

router.get('/:id', (req, res) => {
  res.status(501).json({ message: 'DJ get info not implemented.' });
});

// ======= PUT (Update) DJ ===========
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const user = req.body;

  if (!id) {
    res.status(400).json({ message: 'DJ ID is required.' });
  }
  if (user.password) {
    res.status(400).json({ message: 'Passwords may not be changed here.' });
  }

  Dj.findDJById(id)
    .then(dj => {
      if (dj) {
        // ------- User ID found. Continue. -----------
        Dj.updateDJ(id, user) // Update the DJ
          .then(() => {
            Dj.findDJById(id).then(data => {
              res.status(200).json({
                id: data.id,
                username: data.username,
                name: data.name,
                email: data.email,
                phone: data.phone,
                website: data.website,
                bio: data.bio,
                profile_pic_url: data.profile_pic_url
              });
            }); // res.status()
          }) // updateDJ .then
          .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error', error });
          }); // updateDJ .catch
      } // if (dj) - user found
      else {
        // ------ User not found in database. Send error. ------
        res.status(400).json({ message: `DJ ${id} not found` });
      } // else - user not found
    }) // then
    .catch(err => {
      res.status(500).json({ message: `Error ${err}` });
    });
});
// ========= End PUT DJ =============

// ========= DELETE DJ ==============
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Dj.findDJById(id)
    .then(dj => {
      if (dj) {
        // -- User ID found. Continue. -------
        Dj.removeDJ(id) // Update the DJ
          .then(() => {
            res.status(200).json({ message: `DJ ${id} successfully removed.` });
          })
          .catch(error => {
            res
              .status(500)
              .json({ message: `Error removing DJ ${id}: `, error });
          });
      } else {
        // -- User ID not found. Send error. --
        res.status(400).json({ message: `DJ ${id} not found.` });
      }
    }) // .then (findDJById)
    .catch(errMsg => {
      res.status(500).json({ message: 'Error deleting the DJ:', errMsg });
    }); // .catch (findDJById)
});

module.exports = router;
