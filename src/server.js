'use strict';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';

import path from 'path';
import compression from 'compression';

// Paths for views/static content
const STATIC_DIR = path.join(__dirname, 'public');
const VIEWS_DIR = path.join(__dirname, 'ejs');

let app = express();
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
app.use(express.static(STATIC_DIR));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Setup routes
require('./routes.js').default(app);

// Error-handling
//app.use(require('./error.js'));

// Start server
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server listening on port %s.', port);
});

exports = module.exports = app;
