/**
 * GET     /api/news              ->  index
 * POST    /api/news              ->  create
 * GET     /api/news/:id          ->  show
 * PUT     /api/news/:id          ->  update
 * DELETE  /api/news/:id          ->  destroy
 */

'use strict';

import * as userDAO from './user.model';
import assert from 'assert';
import passport from 'passport';
let LocalStrategy = require('passport-local').Strategy;

/**
* Register user
* restriction: 'none'
*/
export function register(req, res, next) {

  let usernameField = 'username'
    , emailField = 'email'
    , passwordField = 'password'
    , password2Field = 'password2'
    , param;

  console.log(req.body);

  // Validate body (THIS DOES NOT WORK!!!!!)
  req.checkBody(usernameField, 'Username is required').notEmpty();
  req.checkBody(emailField, 'Email is required').notEmpty();
  req.checkBody(emailField, 'Email is invalid').isEmail();
  req.checkBody(passwordField, 'Password is required').notEmpty();
  req.checkBody(password2Field, 'Passwords do not match').equals(req.body.password);

  let userObj = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };
  let responseObj = {
    success: !req.validationErrors(),
    errors: [],
    data: null
  };

  // If errors were found return error-messages to user
  // Else query db
  if (req.validationErrors()) {
    for(let i = 0; i < req.validationErrors().length; i++) {
      param = req.validationErrors()[i].param;
      responseObj.errors[i] = {
        type: 'danger',
        icon: (param === usernameField ? 'user_icon' : (param === emailField ? 'email_icon' : 'lock_icon')),
        param: param,
        msg: req.validationErrors()[i].msg
      };
    }
    return res.status(200).json(responseObj);
  } else {
    return userDAO.createUser(userObj,
      (result) => {
        return res.status(200).json(result);
      }
    );
  }
}

// Setup passport
passport.use(new LocalStrategy(
  (username, password, done) => {
    userDAO.getUserByUsername(username,
      (err, user) => {
        console.log(err);
        assert.equal(err, null);
        if (!user) {
          return done(null, false, { message: 'Unkown user' });
        }
        userDAO.comparePassword(password, user.password,
          (err, isMatch) => {
            assert.equal(err, null);
            console.log('new local strategy');
            if(isMatch){
         			return done(null, user);
         		} else {
         			return done(null, false, {message: 'Invalid password'});
         		}
          }
        );
      }
    );
  })
);
passport.serializeUser(
  (user, done) => {
    console.log('serialize');
    done(null, user._id);
  }
);
passport.deserializeUser(
  (id, done) => {
    userDAO.getUserById(id,
      (err, user) => {
        console.log('deserialize');
        done(err, user);
      }
    );
  }
);
/**
* Login user
* restriction: 'none'
*/
export function login(req, res) {
  passport.authenticate('local',
  { successRedirect: '/dashboard',
    failureRedirect: '/auth' },
  (err, user, info) => {
    assert.equal(err, null);
    if (user) {
      return res.redirect('/dashboard');
    } else {
      return res.redirect('/auth');
    }
  })(req, res);
}
