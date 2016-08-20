'use strict';

// Loading global node_modules
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import expressValidator from 'express-validator';
import flash from 'connect-flash';
import path from 'path';
import compression from 'compression';

import passport from 'passport';

// Paths for views/static content
const STATIC_DIR = path.join(__dirname, 'public', 'static');
const VIEWS_DIR = path.join(__dirname, 'public', 'content');

var app = express();
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : app.settings.env;

app.set('view engine', 'ejs');
app.set('views', VIEWS_DIR);

// Setup hot-reloading for app
// if(NODE_ENV === 'development') {
//   (() => {
//     var webpack = require('webpack');
//     var webpackConfig = require('../webpack.config');
//     var webpackDevMiddleware = require('webpack-dev-middleware');
//     var webpackHotMiddleware = require('webpack-hot-middleware');
//     var compiler = webpack(webpackConfig[1]);
//     app.use(webpackDevMiddleware(compiler, {
//       noInfo: true,
//       publicPath: webpackConfig[1].output.publicPath
//     }));
//     app.use(webpackHotMiddleware)(compiler, {
//       log: console.log,
//       path: '/__webpack_hmr',
//       heartbeat: 10 * 1000
//     });
//   })();
// }

// Setup express
app.use('/static', express.static(STATIC_DIR));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));
app.use(flash());
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error'); // This row exist due to passport setting error-messages to this var
  res.locals.user = req.user || null;
  next();
});
app.use(compression());

// Setup routes
//app.use(require('./routes.js'));
require('./routes.js').default(app);

// Error-handling
//app.use(require('./error.js'));

// Start server
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server listening on port %s.', port);
});

exports = module.exports = app;
