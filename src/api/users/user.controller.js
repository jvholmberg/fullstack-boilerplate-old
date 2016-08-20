/**
 * GET     /api/news              ->  index
 * POST    /api/news              ->  create
 * GET     /api/news/:id          ->  show
 * PUT     /api/news/:id          ->  update
 * DELETE  /api/news/:id          ->  destroy
 */

'use strict';

// import passport from 'passport';
// import {Strategy} from 'passport-local';

import * as userDAO from './user.model';

function handleError() {

}


/**
* Register user
* restriction: 'none'
*/
export function register(req, res, next) {

  // Validate body
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is invalid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  let userObj = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };

  // If errors were found return error-messages to user
  // Else query db
  let errors = req.validationErrors();
  if (errors) {
    console.log(errors);
  } else {
    return userDAO.register(userObj, (result) => {
      return res.status(200).json(result);
    });
  }



}

/**
* Register user
* restriction: 'none'
*/
export function login(req, res, next) {
  var newsObj = req.body.newsObj;
  return newsDAO.createArticle((newsObj) => {
    return res.status(200).json(data);
  });
}
