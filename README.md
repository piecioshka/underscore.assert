# underscore.assert

- This is not for tests files in project...
- This is not instead of [Jasmine][2] or any test framework...
* This is inline code for testing production code!

<pre>
                         _
                        | |
  __ _ ___ ___  ___ _ __| |_
 / _` / __/ __|/ _ \ '__| __|
| (_| \__ \__ \  __/ |  | |_
 \__,_|___/___/\___|_|   \__|

</pre>

## Usage

```javascript
_.assert(typeof fn === 'function', '*fn* should be function');
// throws AssertionError

_.assert(list.length, '*list* should contains any value');
// - for non-empty list nothing to do
// - for empty list throws AssertionError
```

## Example

```javascript
// instead of this:

function isUrl(url) {
    if (typeof url === 'string') {
        throw new Error('URL should be a *string* value');
    }

    // ... URL validation
}

// ... You can that:

function isUrl(url) {
    _.assert(typeof url === 'string', 'URL should be a *string* value');
    // ... URL validation
}

```

There is a shorter, nicer and better practice.

## Changelog

- Change `Assertion.prototype` from `new Error()` to `Error.prototype`.
- Added `assert` method to main `_` underscore namespace.
Method throws `AssertionError` when first param isn't cast to {boolean} `true`.

## License

[The MIT License][0]

[0]: http://piecioshka.mit-license.org
[1]: http://underscorejs.org/
[2]: http://pivotal.github.io/jasmine/
