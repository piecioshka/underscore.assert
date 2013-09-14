[Underscore.js][1] assertion helper
==============================

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

Usage
=====

```javascript
_.assert(typeof fn === 'function', '*fn* should be function');
// throws AssertionError

_.assert(list.length, '*list* should contains any value');
// - for non-empty list nothing to do
// - for empty list throws AssertionError
```

Example
=======
```javascript
// ...

function isUrl(url) {
  _.assert(typeof url === 'string', 'URL should be a *string* value');
  // ... URL validation
}

// ...
```

Changelog
=========

- Added `assert` method to main `_` underscore namespace.
Method throws `AssertionError` when first param isn't cast to {boolean} `true`.

License
=======

[The MIT License][3] (MIT)

[1]: http://underscorejs.org/
[2]: http://pivotal.github.io/jasmine/
[3]: https://github.com/piecioshka/underscore-assert/blob/master/LICENSE
