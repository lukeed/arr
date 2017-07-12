# @arr/flatten

> Tiny (139B) & fast utility to recursively flatten an array of arrays!

## Install

```
$ npm install --save @arr/flatten
```

## Usage

```js
import flatten from '@arr/flatten';

flatten(['a', ['b', ['c']], 'd', ['e', [['f']]]]);
//=> ['a', 'b', 'c', 'd', 'e', 'f']
```

## API

### flatten(arr)

#### arr
Type: `Array`<br>
The array to iterate upon.

## License

MIT © [Luke Edwards](http://lukeed.com)
