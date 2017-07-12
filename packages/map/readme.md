# @arr/map

> A tiny, faster alternative to native `Array.prototype.map`

:warning: Unlike native, `@arr/map` does _not_ support the optional `thisArg` parameter!

:warning: Unlike native, `@arr/map` does _not_ respect [Array holes](http://2ality.com/2015/09/holes-arrays-es6.html) -- you probably never needed this... :thinking:

## Install

```
$ npm install --save @arr/map
```

## Usage

```js
import map from '@arr/map';

const nums = [1, 5, 10, 15];
const doubles = map(nums, x => x * 2);
//=> doubles is: [2, 10, 20, 30]
//=> numbers is: [1, 5, 10, 15]
```

## API

### map(arr, callback)

#### arr
Type: `Array`<br>
The array to iterate upon.

#### callback(value[, index, array])
Type: `Function`<br>
Function to test for each element, taking three arguments:

* **value** (required) -- The current element being processed in the array.
* **index** (optional) -- The index of the current element being processed in the array.
* **array** (optional) -- The array `map` was called upon.


## License

MIT © [Luke Edwards](http://lukeed.com)
