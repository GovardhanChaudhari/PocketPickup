/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(4);

	__webpack_require__(5);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var app = angular.module('ppApp', []);

	exports.app = app;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(1);

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by gvc on 14-11-2015.
	 */
	"use strict";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _app = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SampleController =
	// @ngInject
	["$scope", function SampleController($scope) {
	    _classCallCheck(this, SampleController);

	    $scope.msg = "Welcome";
	    this.msg = "Welcome2";
	}];
	SampleController.$inject = ["$scope"];

	_app.app.controller('SampleController', SampleController);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * Created by gvc on 14-11-2015.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */

	var _app = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DeviceService = (function () {
	    function DeviceService() {
	        _classCallCheck(this, DeviceService);

	        this.isMobile = this._isMobile();
	    }

	    _createClass(DeviceService, [{
	        key: 'getDeviceType',
	        value: function getDeviceType() {}
	    }, {
	        key: '_isMobile',
	        value: function _isMobile() {
	            var isMobile = {
	                Android: function Android() {
	                    return navigator.userAgent.match(/Android/i);
	                },
	                BlackBerry: function BlackBerry() {
	                    return navigator.userAgent.match(/BlackBerry/i);
	                },
	                iOS: function iOS() {
	                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	                },
	                Opera: function Opera() {
	                    return navigator.userAgent.match(/Opera Mini/i);
	                },
	                Windows: function Windows() {
	                    return navigator.userAgent.match(/IEMobile/i);
	                },
	                any: function any() {
	                    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
	                }
	            };

	            return isMobile.any();
	        }
	    }]);

	    return DeviceService;
	})();

/***/ }
/******/ ]);