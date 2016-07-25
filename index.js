/**
 * @author Piotr Kowalski <piecioshka@gmail.com>
 * @see https://github.com/piecioshka/underscore.assert
 * @license The MIT License @ 2013
 */

// Usage
// -----

//     _.assert(true, 'True must be truly value'); // nothing happened ...
//     _.assert(typeof Object === 'number', 'Global value *Object* should be fn'); // throws AssertionError with message

(function () {
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

    // Exports

    if (typeof define !== 'undefined' && define.amd) {
        // Support AMD.
        define(['underscore'], function (root) {
            root.assert = assert;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        // Support CommonJS.
        module.exports = assert;
    } else {
        // Support browsers.
        window._.assert = assert;
    }
}());
