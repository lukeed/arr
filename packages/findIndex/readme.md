# @arr/findindex

> A tiny, faster alternative to native `Array.prototype.findIndex`

:warning: Unlike native, `@arr/findindex` does _not_ support the optional `thisArg` parameter!

## Install

```
$ npm install --save @arr/findindex
```

## Usage

```js
import findIndex from '@arr/findindex';

findIndex([12, 5, 8, 130, 44], val => val > 15);
//=> 3
```

## API

### findIndex(arr, callback)

#### arr
Type: `Array`<br>
The array to iterate upon.

#### callback(value[, index, array])
Type: `Function`<br>
Function to test for each element, taking three arguments:

* **value** (required) -- The current element being processed in the array.
* **index** (optional) -- The index of the current element being processed in the array.
* **array** (optional) -- The array `findIndex` was called upon.


## License

MIT © [Luke Edwards](http://lukeed.com)
