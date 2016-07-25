# underscore.assert ([npm](https://www.npmjs.com/package/underscore.assert))

![](https://img.shields.io/npm/v/underscore.assert.svg)
![](https://img.shields.io/npm/dt/underscore.assert.svg)
![](https://img.shields.io/npm/l/underscore.assert.svg)

> :hammer: Extension for Underscore.js: add method "_.assert", which simplify checking critical states

<pre>
                         _
                        | |
  __ _ ___ ___  ___ _ __| |_
 / _` / __/ __|/ _ \ '__| __|
| (_| \__ \__ \  __/ |  | |_
 \__,_|___/___/\___|_|   \__|

</pre>

## Note

Probably, better option foy you is use [assert](https://www.npmjs.com/package/assert) package from npm.<br/>
But if you insist I will be happy to hear that you use my package 

Please give me any feedback [@piecioshka](http://twitter.com/piecioshka).

## Install

```
npm install underscore.assert
```

## Usage

```javascript
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

**There is a shorter, nicer and better experience for developer :-)**

## Proposals

- This is not for tests files in project...
- This is not instead of Jasmine or any test framework...
* This is inline code for testing production code!

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2013
