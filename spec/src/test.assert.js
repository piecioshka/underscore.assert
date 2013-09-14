describe("assert", function () {
    it('should exists in underscore', function () {
        expect(_.assert).not.toBeUndefined();
    });

    it('should be a function', function () {
        expect(_.isFunction(_.assert)).toBeTruthy();
    });

    it('should throw AssertionError for *falsy-values*', function () {
        expect(_.assert.bind(null, undefined, 'undefined')).toThrow();
        expect(_.assert.bind(null, null, 'null')).toThrow();
        expect(_.assert.bind(null, false, 'false')).toThrow();
        expect(_.assert.bind(null, 0, 'zero')).toThrow();
        expect(_.assert.bind(null, NaN, 'NaN')).toThrow();
        expect(_.assert.bind(null, '', 'empty string')).toThrow();
    });

    it('shouldn\'t throw for truthy condition', function () {
        expect(_.assert.bind(null, 1, 'one')).not.toThrow();
        expect(_.assert.bind(null, 'foo', 'non empty string')).not.toThrow();
    });
});