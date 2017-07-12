# @arr/reduce

> A tiny, faster alternative to native `Array.prototype.reduce`

## Install

```
$ npm install --save @arr/reduce
```

## Usage

```js
import reduce from '@arr/reduce';

const total = reduce([0, 1, 2, 3], (sum, value) => sum + value);
//=> 6

const flattened = reduce([[0, 1], [2, 3], [4, 5]], (a, b) => a.concat(b), []);
//=> [0, 1, 2, 3, 4, 5]
```

## API

### reduce(arr, callback[, initialValue])

#### arr
Type: `Array`<br>
The array to iterate upon.

#### callback(accumulator, value, index, array)
Type: `Function`<br>
Function to test for each element, taking four arguments:

* **accumulator** -- The accumulator accumulates the callback's return values.
* **value** -- The current element being processed in the array.
* **index** -- The index of the current element being processed in the array.
* **array** -- The array `reduce` was called upon.

#### initialValue
Type: `Mixed`<br>
Default: `arr[0]`<br>
The `value` to use as the first argument to the first call of the `callback`. If no initial value is supplied, the first element in the array will be used.


## License

MIT © [Luke Edwards](http://lukeed.com)
