# @arr/foreach

> A tiny, faster alternative to native `Array.prototype.forEach`

:warning: Unlike native, `@arr/foreach` does _not_ support the optional `thisArg` parameter!

## Install

```
$ npm install --save @arr/foreach
```

## Usage

```js
import forEach from '@arr/foreach';

forEach(['a', 'b', 'c'], val => {
  console.log(val);
});
//=> a
//=> b
//=> c
```

## API

### forEach(arr, callback)

#### arr
Type: `Array`<br>
The array to iterate upon.

#### callback(value[, index, array])
Type: `Function`<br>
Function to test for each element, taking three arguments:

* **value** (required) -- The current element being processed in the array.
* **index** (optional) -- The index of the current element being processed in the array.
* **array** (optional) -- The array `forEach` was called upon.


## License

MIT © [Luke Edwards](http://lukeed.com)
