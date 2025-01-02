// IMPORTS AND REQUIREMENTS
//const { setTokenCookie, restoreUser } = require('../../utils/auth');

//imports the 'jsonwebtoken' library, used to create and verify JWTs
const jwt = require('jsonwebtoken');
// imports a 'jwtConfig' object from config/database.js which connects to .env variables
const { jwtConfig } = require('../config');
//imports user model
const { User } = require('../db/models');
//gets secret and experation date of JWT token, both are in .env file
const { secret, expiresIn } = jwtConfig

// Send a JWT Cookie
const setTokenCookie = (res, user) => {
    // Create the token.
    const safeUser = {
      id: user.id,
      email: user.email,
      username: user.username,
    };
    const token = jwt.sign(
      { data: safeUser },
      secret,
      { expiresIn: parseInt(expiresIn) } // 604,800 seconds = 1 week
    );

    const isProduction = process.env.NODE_ENV === "production";

    // Set the token cookie
    res.cookie('token', token, {
      maxAge: expiresIn * 1000, // maxAge in milliseconds
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction && "Lax"
    });

    return token;
  };

//RESTORE USER
//middleware function that will restore the session user based on the contents of the JWT cookie
const restoreUser = (req, res, next) => {
  console.log('Starting restoreUser middleware');
  const { token } = req.cookies;
  console.log('Token:', token);
  req.user = null;

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      console.log('JWT Verification Error:', err);
      return next();
    }

    try {
      const { id } = jwtPayload.data;
      console.log('Looking up user with id:', id);
      req.user = await User.findByPk(id, {
        attributes: {
          include: ['email', 'createdAt', 'updatedAt']
        }
      });
      console.log('Found user:', req.user);
    } catch (e) {
      console.log('User Lookup Error:', e);
      res.clearCookie('token');
      return next();
    }

    if (!req.user) {
      console.log('No user found, clearing cookie');
      res.clearCookie('token');
    }

    return next();
  });
};


//REQUIRE AUTH (If there is no current user, return an error)
  const requireAuth = function (req, _res, next) {
    if (req.user) return next();

    const err = new Error('Authentication required');
    err.title = 'Authentication required';
    err.errors = { message: 'Authentication required' };
    err.status = 401;
    return next(err);
  }

module.exports = { setTokenCookie, restoreUser, requireAuth };
