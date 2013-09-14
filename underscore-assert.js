/**
 * @author Piotr Kowalski <piecioshka@gmail.com>
 * @license The MIT License (MIT)
 */
(function (_) {
    'use strict';

    function AssertionError(msg) {
        this.name = 'AssertionError';
        this.message = msg || this.name;
    }

    AssertionError.prototype = new Error();
    AssertionError.prototype.constructor = AssertionError;

    function assert(condition, message) {
        if (!condition) {
            throw new AssertionError(message);
        }
    }

    _.mixin({
        assert: assert
    });
}(_));
