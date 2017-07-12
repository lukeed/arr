# @arr/find

> A tiny, faster alternative to native `Array.prototype.find`

:warning: Unlike native, `@arr/find` does _not_ support the optional `thisArg` parameter!

## Install

```
$ npm install --save @arr/find
```

## Usage

```js
import find from '@arr/find';

find([12, 5, 8, 130, 44], val => val > 15);
//=> 130
```

## API

### find(arr, callback)

#### arr
Type: `Array`<br>
The array to iterate upon.

#### callback(value[, index, array])
Type: `Function`<br>
Function to test for each element, taking three arguments:

* **value** (required) -- The current element being processed in the array.
* **index** (optional) -- The index of the current element being processed in the array.
* **array** (optional) -- The array `find` was called upon.


## License

MIT © [Luke Edwards](http://lukeed.com)
