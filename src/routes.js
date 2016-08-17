'use strict';

import {Router} from 'express';

var router = new Router();

router.get('*', (req, res) => {
  res.render('index');
});

// Setup API-routes

module.exports = router;
