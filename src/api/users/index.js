'use strict';

import {Router} from 'express';
import * as controller from './user.controller';

var router = new Router();

router.post('/register', controller.register);
router.post('/login', controller.login);

module.exports = router;
