'use strict';

import {Router} from 'express';
import {MongoClient} from 'mongodb';
import assert from 'assert';
import mongoUtil from './mongoUtil';

export default (app) => {

  // Setup app-routes
  let router = new Router();
  router.get('*', (req, res) => {
    res.render('index');
  });
  app.use(router);

  // Setup API-routes
  mongoUtil.connectToServer((err) => {
		assert.equal(null, err);

		app.use('/auth', require('./api/users'));
	});
}
