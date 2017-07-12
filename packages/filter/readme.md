# @arr/filter

> A tiny, faster alternative to native `Array.prototype.filter`

:warning: Unlike native, `@arr/filter` does _not_ support the optional `thisArg` parameter!

If you are okay with mutating the original, check out [`@arr/filter.mutate`](/packages/filter.mutate) for an **extremely fast** `filter` alternative!

## Install

```
$ npm install --save @arr/filter
```

## Usage

```js
import filter from '@arr/filter';

const words = ['foo', 'bar', 'baz', 'foobar', 'hello', 'world'];

filter(words, str => str.length > 3);
//=> ['foobar', 'hello', 'world']

console.log(words);
//=> ['foo', 'bar', 'baz', 'foobar', 'hello', 'world']
```

## API

### filter(arr, callback)

#### arr
Type: `Array`<br>
The array to iterate upon.

#### callback(value[, index, array])
Type: `Function`<br>
Function to test for each element, taking three arguments:

* **value** (required) -- The current element being processed in the array.
* **index** (optional) -- The index of the current element being processed in the array.
* **array** (optional) -- The array `filter` was called upon.


## License

MIT © [Luke Edwards](http://lukeed.com)
