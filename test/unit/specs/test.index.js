'use strict';

var _ = require('underscore');
var assert = require('../../../src/index');

_.mixin({ assert: assert });

describe('General', function () {
    it('should exists in underscore', function () {
        expect(assert).not.toBeUndefined();
    });

    it('should be a function', function () {
        expect(assert).toEqual(jasmine.any(Function));
    });
});

describe('Working properly', function () {
    it('should throw AssertionError for *falsy-values*', function () {
        expect(assert.bind(this, undefined, 'undefined')).toThrow();
        expect(assert.bind(this, null, 'null')).toThrow();
        expect(assert.bind(this, false, 'false')).toThrow();
        expect(assert.bind(this, 0, 'zero')).toThrow();
        expect(assert.bind(this, NaN, 'NaN')).toThrow();
        expect(assert.bind(this, '', 'empty string')).toThrow();
    });

    it("shouldn't throw for truthy condition", function () {
        expect(assert.bind(this, 1, 'one')).not.toThrow();
        expect(assert.bind(this, 'foo', 'non empty string')).not.toThrow();
    });

    it('should throw AssertionError', function () {
        expect(assert.bind(this, 0)).toThrow(jasmine.any(assert.ErrorConstructor));

        try {
            assert(0);
        } catch (error) {
            expect(error instanceof Error).toBeTruthy();
            expect(error instanceof Object).toBeTruthy();
            expect(error instanceof Function).not.toBeTruthy();
        }
    });
});
