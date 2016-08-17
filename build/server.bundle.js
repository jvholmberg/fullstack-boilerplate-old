/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/johan/Documents/Projects/fullstack-boilerplate/build";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Loading global node_modules
	
	var _express = __webpack_require__(2);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _bodyParser = __webpack_require__(3);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	var _path = __webpack_require__(4);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _compression = __webpack_require__(5);
	
	var _compression2 = _interopRequireDefault(_compression);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var STATIC_DIR = _path2.default.join(__dirname, 'public', 'static');
	var VIEWS_DIR = _path2.default.join(__dirname, 'public', 'content');
	
	// Setup express
	var app = (0, _express2.default)();
	app.set('view engine', 'ejs');
	app.set('views', VIEWS_DIR);
	app.use('/static', _express2.default.static(STATIC_DIR));
	app.use(_bodyParser2.default.urlencoded({ extended: true }));
	app.use((0, _compression2.default)());
	
	// Setup routes
	app.use(__webpack_require__(6));
	
	// Error-handling
	//app.use(require('./error.js'));
	
	// Start server
	var port = process.env.PORT || 3000;
	app.listen(port, function () {
	    console.log('Server listening on port %s.', port);
	});
	
	exports = module.exports = app;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _express = __webpack_require__(2);
	
	var router = new _express.Router();
	
	router.get('/', function (req, res) {
	  res.render('home');
	});
	
	// Setup API-routes
	
	module.exports = router;

/***/ }
/******/ ]);
//# sourceMappingURL=server.bundle.js.map