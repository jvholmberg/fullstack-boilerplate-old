'use strict';

import {Router} from 'express';
import assert from 'assert';

export default (app) => {

  // Setup app-routes
  let router = new Router();
  router.get('*', (req, res) => {
    res.render('index');
  });

  app.use('/api/user/register?', (req, res) => {
    console.log(req.body);
    res.send({foo: 'bar'});
  });

  app.use(router);
}
