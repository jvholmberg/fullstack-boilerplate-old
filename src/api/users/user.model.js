'use strict';

import assert from 'assert';
import bcrypt from 'bcryptjs';
import mongoUtil from '../../mongoUtil';
const db = mongoUtil.getDb().collection('users');

export function createUser(userObj, next) {
  bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(userObj.password, salt, (err, hash) => {
          userObj.password = hash;
          db.insertOne(userObj, (err, result) => {
            assert.equal(err, null);
            next({});
          });
      });
  });
}

export function getUserByUsername(username, next){
  db.findOne({
    username: username
  }, (err, doc) => {
    assert.equal(err, null);
    next(err, doc);
  });
}

export function getUserById(userId, next){
  db.findOne({
    _id: userId
  }, (err, doc) => {
    assert.equal(err, null);
    next(err, doc);
  });
}

export function comparePassword(candidatePassword, hash, next){
	bcrypt.compare(candidatePassword, hash,
    (err, isMatch) => {
    	assert.equal(err, null);
    	next(err, isMatch);
	   }
   );
}
