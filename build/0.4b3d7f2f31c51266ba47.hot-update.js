exports.id = 0;
exports.modules = {

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Loading global node_modules
	
	var _express = __webpack_require__(1);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _bodyParser = __webpack_require__(7);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	var _path = __webpack_require__(2);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _compression = __webpack_require__(8);
	
	var _compression2 = _interopRequireDefault(_compression);
	
	var _webpack = __webpack_require__(3);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _webpackDevMiddleware = __webpack_require__(11);
	
	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);
	
	var _webpackHotMiddleware = __webpack_require__(12);
	
	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);
	
	var _webpack3 = __webpack_require__(6);
	
	var _webpack4 = _interopRequireDefault(_webpack3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Import middleware for hot-reloading
	var STATIC_DIR = _path2.default.join(__dirname, 'public', 'static');
	var VIEWS_DIR = _path2.default.join(__dirname, 'public', 'content');
	
	// Setup express
	var app = (0, _express2.default)();
	app.set('view engine', 'ejs');
	app.set('views', VIEWS_DIR);
	app.use('/static', _express2.default.static(STATIC_DIR));
	app.use(_bodyParser2.default.urlencoded({ extended: true }));
	app.use((0, _compression2.default)());
	
	// Setup hot-reloading for app
	var compilerServer = (0, _webpack2.default)(_webpack4.default[1]);
	var compilerClient = (0, _webpack2.default)(_webpack4.default[1]);
	app.use((0, _webpackDevMiddleware2.default)(compiler, {
	  noInfo: true,
	  publicPath: _webpack4.default[1].output.publicPath
	}));
	app.use((0, _webpackDevMiddleware2.default)(compiler, {
	  noInfo: true,
	  publicPath: _webpack4.default[1].output.publicPath
	}));
	app.use((0, _webpackHotMiddleware2.default)(compiler, {
	  log: console.log,
	  path: '/__webpack_hmr',
	  heartbeat: 10 * 1000
	}));
	
	// Setup routes
	app.use(__webpack_require__(4));
	
	// Error-handling
	//app.use(require('./error.js'));
	
	// Start server
	var port = process.env.PORT || 3000;
	app.listen(port, function () {
	  console.log('Server listening on port %s.', port);
	});
	
	exports = module.exports = app;

/***/ }

};
//# sourceMappingURL=0.4b3d7f2f31c51266ba47.hot-update.js.map