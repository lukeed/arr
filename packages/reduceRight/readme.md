# @arr/reduceright

> A tiny, faster alternative to native `Array.prototype.reduceRight`

## Install

```
$ npm install --save @arr/reduceright
```

## Usage

```js
import reduceRight from '@arr/reduceright';

reduceRight([[0, 1], [2, 3], [4, 5]], (a, b) => a.concat(b), []);
//=> [4, 5, 2, 3, 0, 1]
```

## API

### reduceRight(arr, callback[, initialValue])

#### arr
Type: `Array`<br>
The array to iterate upon.

#### callback(accumulator, value, index, array)
Type: `Function`<br>
Function to test for each element, taking four arguments:

* **accumulator** -- The value previously returned in the last invocation of the callback, or initialValue, if supplied.
* **value** -- The current element being processed in the array.
* **index** -- The index of the current element being processed in the array.
* **array** -- The array `reduceRight` was called upon.

#### initialValue
Type: `Mixed`<br>
Default: `arr[-1]`<br>
The `value` to use as the first argument to the first call of the `callback`. If no initial value is supplied, the last element in the array will be used.


## License

MIT © [Luke Edwards](http://lukeed.com)
