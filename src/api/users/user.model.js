'use strict';

import assert from 'assert';
import bcrypt from 'bcryptjs';
import mongoUtil from '../../mongoUtil';
const db = mongoUtil.getDb().collection('users');

export function register(userObj, next) {
  bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(userObj.password, salt, function(err, hash) {
          userObj.password = hash;
          db.insertOne(userObj, (err, result) => {
            assert.equal(err, null);
            next({});
          });
      });
  });
}

export function login(id, next) {
  next({
    fn: 'getNews'
  });
}
