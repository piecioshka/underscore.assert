/**
 * @author Piotr Kowalski <piecioshka@gmail.com>
 * @fileOverview Underscore.js assertion helper
 * @see https://github.com/piecioshka/underscore.assert
 * @requires {@link http://underscorejs.org/|Underscore.js}
 * @license The MIT License
 * @example
 *   _.assert(true, 'True must be truly value'); 
 *   // idle...
 *   _.assert(typeof Object === 'number', 'Global value *Object* should be fn');
 *   // throws AssertionError with message
 */
/*jslint nomen: true, indent: 4 */
/*global _ */
;(function (_) {
    'use strict';

    /**
     * Assertion Error.
     * @param {string} [message]
     * @class
     * @constructor
     */
    function AssertionError(message) {
        this.name = 'AssertionError';
        this.message = (message || this.name);
    }

    AssertionError.prototype = Error.prototype;
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
