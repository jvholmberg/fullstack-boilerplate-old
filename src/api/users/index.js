'use strict';

import {Router} from 'express';
import * as controller from './user.controller';
import {LocalStrategy} from 'passport-local';
import passport from 'passport';

var router = new Router();

passport.use(new LocalStrategy((username, password, next) => {

}));

router.post('/register', controller.register);
router.post('/login', controller.login);


module.exports = router;
