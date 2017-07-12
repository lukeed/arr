# @arr/includes

> A tiny, faster alternative to native `Array.prototype.includes`

## Install

```
$ npm install --save @arr/includes
```

## Usage

```js
import includes from '@arr/includes';

const foo = ['a', 'b', 'c', 'd'];

includes(foo, 'c');
//=> true
includes(foo, 'g');
//=> false
includes(foo, 'b', 2);
//=> false
```

## API

### includes(arr, item[, fromIndex])

#### arr
Type: `Array`<br>
The array to iterate upon.

#### item
Type: `Mixed`<br>
The element to search for.

#### fromIndex
Type: `Integer`<br>
Default: `0`<br>
The position in the `arr` at which to begin searching.


## License

MIT © [Luke Edwards](http://lukeed.com)
