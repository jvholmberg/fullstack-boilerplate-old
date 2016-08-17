'use strict';

// Loading global node_modules
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import compression from 'compression';

const STATIC_DIR = path.join(__dirname, 'public', 'static');
const VIEWS_DIR = path.join(__dirname, 'public', 'content');

// Setup express
let app = express();
app.set('view engine', 'ejs');
app.set('views', VIEWS_DIR);
app.use('/static', express.static(STATIC_DIR));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

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
