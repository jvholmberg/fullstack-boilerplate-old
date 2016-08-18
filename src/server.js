'use strict';

// Loading global node_modules
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import compression from 'compression';

// Import middleware for hot-reloading
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

const STATIC_DIR = path.join(__dirname, 'public', 'static');
const VIEWS_DIR = path.join(__dirname, 'public', 'content');

// Setup express
let app = express();
app.set('view engine', 'ejs');
app.set('views', VIEWS_DIR);
app.use('/static', express.static(STATIC_DIR));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

// Setup hot-reloading for app
// webpackConfig[0] = Server
// webpackConfig[1] = Client
let compilerServer = webpack(webpackConfig[0]);
let compilerClient = webpack(webpackConfig[1]);
app.use(webpackDevMiddleware(compilerServer, {
  noInfo: true,
  publicPath: webpackConfig[0].output.publicPath
}));
app.use(webpackHotMiddleware(compilerServer, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));
app.use(webpackDevMiddleware(compilerClient, {
  noInfo: true,
  publicPath: webpackConfig[1].output.publicPath
}));
app.use(webpackHotMiddleware(compilerClient, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

// Setup routes
app.use(require('./routes.js'));

// Error-handling
//app.use(require('./error.js'));

// Start server
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server listening on port %s.', port);
});

exports = module.exports = app;
