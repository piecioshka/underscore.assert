# underscore.assert

![](https://img.shields.io/npm/v/underscore.assert.svg)
![](https://img.shields.io/npm/dt/underscore.assert.svg)
![](https://img.shields.io/npm/l/underscore.assert.svg)

> Plugin for underscore - add method _.assert

- This is not for tests files in project...
- This is not instead of Jasmine or any test framework...
* This is inline code for testing production code!

<pre>
                         _
                        | |
  __ _ ___ ___  ___ _ __| |_
 / _` / __/ __|/ _ \ '__| __|
| (_| \__ \__ \  __/ |  | |_
 \__,_|___/___/\___|_|   \__|

</pre>

## Install

```
npm install underscore.assert
```

## Usage

```javascript
_.assert(typeof fn === 'function', '*fn* should be function');
// throws AssertionError

_.assert(list.length, '*list* should contains any value');
// - for non-empty list nothing to do
// - for empty list throws AssertionError

_.assert(false); // => throw `AssertionError`
_.assert.ErrorConstructor = MyCustomError;
_.assert(false); // => throw `MyCustomError`
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

## License

[The MIT License](http://piecioshka.mit-license.org)
