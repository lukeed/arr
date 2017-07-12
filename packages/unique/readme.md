# @arr/unique

> Tiny (111B) & fast utility to retrieve all unique values from an Array.

## Install

```
$ npm install --save @arr/unique
```

## Usage

```js
import unique from '@arr/unique';

unique([1, 1, 2, 3, 3]);
//=> [1, 2, 3]

unique(['foo', 'foo', 'bar', 'foo']);
//=> ['foo', 'bar']
```

## API

### unique(arr)

#### arr
Type: `Array`<br>
The array to iterate upon.


## License

MIT © [Luke Edwards](http://lukeed.com)
