/**
 * @fileOverview Underscore.js assertion helper
 * @requires {@link http://underscorejs.org/|Underscore.js}
 * @see https://github.com/piecioshka/underscore-assert
 * @author Piotr Kowalski <piecioshka@gmail.com>
 * @license The MIT License (MIT)
 * @example
 *   _.assert(true, 'True must be truly value'); 
 *   // idle...
 *   _.assert(typeof Object === 'number', 'Global value *Object* should be fn');
 *   // throws AssertionError with message
 */
/*jslint nomen: true, indent: 4 */
/*global _ */
(function (_) {
    'use strict';

    /**
     * Assertion Error.
     * @param {string} [msg]
     * @class
     * @constructor
     */
    function AssertionError(msg) {
        this.name = 'AssertionError';
        this.message = msg || this.name;
    }

    AssertionError.prototype = new Error();
    AssertionError.prototype.constructor = AssertionError;

    /**
     * Check first param for *true*.
     * When first param is *false* value, throw {AssertionError}.
     * @param {Boolean} condition
     * @param {string} [message]
     * @throws {AssertionError} Condition must be truly.
     */
    function assert(condition, message) {
        if (!condition) {
            throw new AssertionError(message);
        }
    }

    _.mixin({
        'assert': assert
    });
}(_));
