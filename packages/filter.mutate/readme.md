# @arr/filter.mutate

> Fastest `Array.filter` alternative --- mutates original array!

:exclamation: Unlike native, `@arr/filter.mutate` **mutates** the original array! Use [`@arr/filter`](/packages/filter) for a non-mutating version.

## Install

```
$ npm install --save @arr/filter.mutate
```

## Usage

```js
import filter from '@arr/filter.mutate';

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

filter(words, str => str.length > 6);
//=> ['exuberant', 'destruction', 'present']

console.log(words);
//=> ['exuberant', 'destruction', 'present']
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
* **array** (optional) -- The array `filter.mutate` was called upon.


## License

MIT © [Luke Edwards](http://lukeed.com)
