# underscore.assert ([npm](https://www.npmjs.com/package/underscore.assert))

[![npm version](https://badge.fury.io/js/underscore.assert.svg)](https://badge.fury.io/js/underscore.assert)
![](https://img.shields.io/npm/dt/underscore.assert.svg)
[![travis-ci](https://api.travis-ci.com/piecioshka/underscore.assert.svg?branch=master)](https://app.travis-ci.com/github/piecioshka/underscore.assert)
[![coverage](https://coveralls.io/repos/github/piecioshka/underscore.assert/badge.svg?branch=master)](https://coveralls.io/github/piecioshka/underscore.assert?branch=master)

:hammer: Plugin for Underscore.js: add method "\_.assert", which simplify checking states

```
                         _
                        | |
  __ _ ___ ___  ___ _ __| |_
 / _` / __/ __|/ _ \ '__| __|
| (_| \__ \__ \  __/ |  | |_
 \__,_|___/___/\___|_|   \__|

```

## Warning!

Probably, better option foy you is use [assert](https://www.npmjs.com/package/assert) package from npm.<br/>
But if you insist I will be happy to hear that you use my package 

Please give me any feedback [@piecioshka](http://twitter.com/piecioshka).

## Install

```
$ npm install underscore.assert
```

## Usage

```javascript
var _ = require('underscore');
var assert = require('underscore.assert');
_.mixin({ assert: assert });

_.assert(typeof fn === 'function', '*fn* should be function'); // throws AssertionError
_.assert(list.length > 0, '*list* should contains any value'); // thows ONLY when list is empty
_.assert(false); // => throw `AssertionError`
_.assert.ErrorConstructor = MyCustomError;
_.assert(false); // => throw `MyCustomError`
```

## Example

Instead of this:

```javascript
function isUrl(url) {
    if (typeof url === 'string') {
        throw new Error('URL should be a *string* value');
    }

    // ... URL validation
}
```

... you can that:

```javascript
function isUrl(url) {
    _.assert(typeof url === 'string', 'URL should be a *string* value');
    // ... URL validation
}

```

There is a shorter, nicer and better experience for developer :smile:

## Proposals

* This is not for tests files in project...
* This is not instead of Jasmine or any test framework...
* This is inline code for testing production code!

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2013
