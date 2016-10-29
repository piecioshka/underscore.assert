(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * @author Piotr Kowalski <piecioshka@gmail.com> (http://piecioshka.pl)
	 * @name underscore.assert
	 * @description Plugin for Underscore.js: add method '_.assert', which simplify checking states
	 * @version 1.2.1
	 * @license MIT
	 * @example
	 *   // nothing happened ...
	 *   _.assert(true, 'True must be truly value');
	 *
	 *   // throws AssertionError with message
	 *   _.assert(typeof Object === 'number', 'Global value *Object* should be fn');
	 */
	
	'use strict';
	
	/**
	 * Custom error constructor.
	 *
	 * @constructor
	 * @param {string} [message]
	 */
	function AssertionError(message) {
	    var err = new Error(message);
	    var stack = err.stack || err.stacktrace || null;
	
	    this.name = 'AssertionError';
	    this.message = (message || this.name);
	    this.stacktrace = stack;
	}
	
	AssertionError.prototype = Error.prototype;
	AssertionError.prototype.constructor = AssertionError;
	
	/**
	 * Check first param for `true`.
	 * When first param is `false` value, throw `AssertionError`.
	 *
	 * @param {boolean} condition
	 * @param {string} [message]
	 * @throws When condition will be falsy value.
	 */
	function assert(condition, message) {
	    if (!condition) {
	        throw new assert.ErrorConstructor(message);
	    }
	}
	
	// Set reference to constructor of error which will throw on failed.
	assert.ErrorConstructor = AssertionError;
	
	module.exports = assert;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=underscore.slice.js.map