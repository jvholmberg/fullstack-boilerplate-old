'use strict';

import {Router} from 'express';
import * as controller from './user.controller';

export default (app, db) => {
  var router = new Router();

  router.get('/', controller.index);
  router.post('/', controller.create);
  router.get('/:id', controller.show);
  router.put('/:id', controller.update);
  router.patch('/:id', controller.update);
  router.delete('/:id', controller.destroy);

  app.use('/api/news', router);
}
