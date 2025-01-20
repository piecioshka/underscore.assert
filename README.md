# underscore.assert

[![node version](https://img.shields.io/node/v/underscore.assert.svg)](https://www.npmjs.com/package/underscore.assert)
[![npm version](https://badge.fury.io/js/underscore.assert.svg)](https://badge.fury.io/js/underscore.assert)
[![downloads count](https://img.shields.io/npm/dt/underscore.assert.svg)](https://www.npmjs.com/package/underscore.assert)
[![size](https://packagephobia.com/badge?p=underscore.assert)](https://packagephobia.com/result?p=underscore.assert)
[![license](https://img.shields.io/npm/l/underscore.assert.svg)](https://piecioshka.mit-license.org)
[![github-ci](https://github.com/piecioshka/underscore.assert/actions/workflows/testing.yml/badge.svg)](https://github.com/piecioshka/underscore.assert/actions/workflows/testing.yml)

🔨 Plugin for Underscore.js: add `_.assert()`, which simplify checking states

```
                         _
                        | |
  __ _ ___ ___  ___ _ __| |_
 / _` / __/ __|/ _ \ '__| __|
| (_| \__ \__ \  __/ |  | |_
 \__,_|___/___/\___|_|   \__|

```

## Usage

Installation:

```bash
npm install underscore.assert
```

```javascript
var _ = require("underscore");
var assert = require("underscore.assert");
_.mixin({ assert: assert });

_.assert(typeof fn === "function", "*fn* should be function"); // throws AssertionError
_.assert(list.length > 0, "*list* should contains any value"); // throws ONLY when list is empty
_.assert(false); // => throw `AssertionError`
_.assert.ErrorConstructor = MyCustomError;
_.assert(false); // => throw `MyCustomError`
```

## Example

Instead of this:

```javascript
function isUrl(url) {
    if (typeof url === "string") {
        throw new Error("URL should be a *string* value");
    }

    // ... URL validation
}
```

... you can that:

```javascript
function isUrl(url) {
    _.assert(typeof url === "string", "URL should be a *string* value");
    // ... URL validation
}
```

## Proposals

- This is not for specs files in project...
- This is not instead of Jasmine or any test framework...
- This is inline code for testing production code!

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2013
