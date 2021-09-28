const router = require('express').Router();
const Users = require('../controllers/user-controller');
const generateToken = require('../middleware/generateToken');
const bcrypt = require('bcryptjs');
const validateRegistration = require('../middleware/validateRegistration');
const validateLogin = require('../middleware/validateLogin');
const calculateBudgets = require('../helpers/calculateBudgets');
const validateIosRegistration = require('../middleware/ios/validateIosRegistration');
const locateAccount = require('../middleware/locateAccount');

/********************************************************
 *                    REGISTER USER                     *
 ********************************************************/
router.post(
  '/register',
  validateRegistration,
  locateAccount,
  async (req, res) => {
    let user = req.body;

    user.password = await bcrypt.hash(user.password, 10);

    try {
      [user] = await Users.addUser(user);

      delete user.password;

      const {
        fat_budget_g,
        carb_budget_g,
        protein_budget_g,
        caloric_budget_kcal,
      } = calculateBudgets(user);

      res.status(201).json({
        message: `New account created`,
        token: generateToken(user.id),
        user: {
          ...user,
          fat_budget_g,
          carb_budget_g,
          protein_budget_g,
          caloric_budget_kcal,
        },
      });
    } catch (error) {
      res.status(500).json({
        message: 'Internal Server Error',
        error: error.message,
      });
    }
  }
);

/********************************************************
 *                      LOGIN USER                       *
 ********************************************************/
router.post('/login', validateLogin, async (req, res) => {
  const { email, password } = req.body;

  try {
    const [user] = await Users.getUserBy({ email });

    // if the user is not found or the password is invalid
    if (!user || !(await bcrypt.compareSync(password, user.password))) {
      res.status(401).json({
        message: 'The email or password provided is invalid',
      });
    }

    delete user.password;

    const {
      fat_budget_g,
      carb_budget_g,
      protein_budget_g,
      caloric_budget_kcal,
    } = calculateBudgets(user);

    res.status(200).json({
      message: `User authenticated`,
      token: generateToken(user.id),
      user: {
        ...user,
        fat_budget_g,
        carb_budget_g,
        protein_budget_g,
        caloric_budget_kcal,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
});

/********************************************************
 *                  REGISTER USER - IOS                 *
 ********************************************************/
router.post(
  '/ios/register',
  validateIosRegistration,
  locateAccount,
  async (req, res) => {
    const newUser = req.body;
    newUser.password = await bcrypt.hash(req.body.password, 10);

    try {
      const [user] = await Users.addUser(newUser);

      delete user.password;

      res.status(201).json({
        message: `New account created`,
        token: generateToken(user.id),
        user,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Internal Server Error',
        error: error.message,
      });
    }
  }
);

module.exports = router;
