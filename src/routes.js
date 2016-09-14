'use strict';

import {Router} from 'express';
import assert from 'assert';

import mongoUtil from './mongoUtil';

export default (app) => {

  // Setup app-routes
  let router = new Router();
  router.get('*', (req, res) => {
    res.render('index');
  });

  // Setup API-routes
  mongoUtil.connectToServer((err) => {
    assert.equal(null, err);

    app.use('/api/user/', require('./api/users'));
  });


  app.use(router);
}
