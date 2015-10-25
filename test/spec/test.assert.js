var _ = require('underscore');
_.assert = require('../../underscore.assert');

describe('assert', function () {
    it('should exists in underscore', function () {
        expect(_.assert).not.toBeUndefined();
    });

    it('should be a function', function () {
        expect(_.isFunction(_.assert)).toBeTruthy();
    });

    it('should throw AssertionError for *falsy-values*', function () {
        expect(_.assert.bind(this, undefined, 'undefined')).toThrow();
        expect(_.assert.bind(this, null, 'null')).toThrow();
        expect(_.assert.bind(this, false, 'false')).toThrow();
        expect(_.assert.bind(this, 0, 'zero')).toThrow();
        expect(_.assert.bind(this, NaN, 'NaN')).toThrow();
        expect(_.assert.bind(this, '', 'empty string')).toThrow();
    });

    it('shouldn\'t throw for truthy condition', function () {
        expect(_.assert.bind(this, 1, 'one')).not.toThrow();
        expect(_.assert.bind(this, 'foo', 'non empty string')).not.toThrow();
    });

    it('should throw AssertionError', function () {
        expect(_.assert.bind(this, 0)).toThrow(jasmine.any(_.assert.ErrorConstructor));

        try {
            _.assert(0);
        } catch (e) {
            expect(e instanceof Error).toBeTruthy();
            expect(e instanceof Object).toBeTruthy();
            expect(e instanceof Function).not.toBeTruthy();
        }
    });
});
