//IMPORTS AND REQUIREMENTS

//imports the Express.js framework, which is used to create web applications and APIs in Node.js
const express = require('express');
//importing Operator object - used for complex queries.
const { Op } = require('sequelize');
//Used for hashing passwords
const bcrypt = require('bcryptjs');
//imported from utils/auth.js. setTokenCookie creates JWT token, restoreUsers verifies the token sent in the request
const { setTokenCookie, restoreUser } = require('../../utils/auth');
//Import the user model
const { User } = require('../../db/models');
//creates a new router for this route
const router = express.Router();

// backend/routes/api/session.js
// ...
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
// ...

// backend/routes/api/session.js
// ...

const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email or username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  handleValidationErrors
];

// Log in
router.post(
  '/',
  validateLogin,
  async (req, res, next) => {
    const { credential, password } = req.body;

    if (!credential){
      err.status = 400;
      err.title = 'validation error';
      err.errors = {"credential": "Email or username is required"}
    }
    if (!password){
      err.status = 400;
      err.title = 'validation error';
      err.errors = {"password": "Password is required"}
    }
    const user = await User.unscoped().findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential
        }
      }
    });

    if (!user || !bcrypt.compareSync(password, user.hashedPassword.toString())) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = {"message": "Invalid credentials"};
      return next(err);
    }

    const safeUser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
    };

    await setTokenCookie(res, safeUser);

    return res.status(200).json({
      user: safeUser
    });
  }
);

// Log out
router.delete(
    '/',
    (_req, res) => {
      res.clearCookie('token');
      return res.json({ message: 'success' });
    }
  );

// Restore session user
router.get(
  '/',
  (req, res) => {
    try {
      const { user } = req;
      console.log('Request received, user:', user); // Debug log
      if (user) {
        const safeUser = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          username: user.username,
        };
        console.log('Session user found:', safeUser);
        return res.status(200).json({
          user: safeUser
        });
      } else {
        console.log('No session user found');
        return res.status(200).json({ user: null });
      }
    } catch (error) {
      console.error('Session restore error:', error);
      return res.status(500).json({
        error: error.message,
        stack: process.env.NODE_ENV === 'production' ? null : error.stack
      });
    }
  }
);

module.exports = router;
