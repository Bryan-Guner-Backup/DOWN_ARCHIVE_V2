const hashPassword = require('../utils/hashPassword.js');
const validateLogin = require('../api/middleware/validateLogin.js');
const generateToken = require('../api/middleware/generateToken.js');
const jwt = require('jsonwebtoken');

describe('utility test cases', () => {
  describe('hashPassword()', () => {
    test('hashPassword hashes the password', async () => {
      const password = 'secure12';
      const hash = await hashPassword(password);

      expect(password).not.toBe(hash);
    });

    test('hashPassword does not allow pw < 8 char', async () => {
      const short = 'short';
      try {
        const invalid = hashPassword(short);
      } catch (error) {
        expect(error).toEqual(
          new Error(
            'Password must be greater than 8 characters and less than 16 characters'
          )
        );
      }
    });

    test('hashPassword does not allow pw > 16 char', async () => {
      const long = 'omgthispasswordiswaytoolong';
      try {
        const alsobad = hashPassword(long);
      } catch (error) {
        expect(error).toEqual(
          new Error(
            'Password must be greater than 8 characters and less than 16 characters'
          )
        );
      }
    });
  });
  describe('validateLogin()', () => {
    test('login will not work with no user', async () => {
      try {
        validateLogin('testing123');
      } catch (error) {
        expect(error).toEqual(new Error('Unable to login'));
      }
    });

    test('login will not work with mismatched passwords', async () => {
      const user = {
        password: 'testing123',
      };
      try {
        validateLogin('testing13', user);
      } catch (error) {
        expect(error).toEqual(new Error('Unable to login'));
      }
    });
  });
  describe('generateToken()', () => {
    test('should create a token with the provided userId', async () => {
      const userId = 1;
      const testSecret = 'jwt-secret';
      const token = await generateToken(userId);
      const decoded = jwt.verify(token, testSecret);
      expect(decoded.userId).toBe(1);
    });
  });
});
