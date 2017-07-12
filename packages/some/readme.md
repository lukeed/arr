# @arr/some

> A tiny, faster alternative to native `Array.prototype.some`

:warning: Unlike native, `@arr/some` does _not_ support the optional `thisArg` parameter!


## Install

```
$ npm install --save @arr/some
```

## Usage

```js
import some from '@arr/some';

const isBiggerThan10 = val => val > 10;

some([2, 5, 8, 1, 4], isBiggerThan10);
//=> false
some([12, 5, 8, 1, 4], isBiggerThan10);
//=> true
```

## API

### some(arr, callback)

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
