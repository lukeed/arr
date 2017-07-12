# @arr/reverse

> A tiny, faster alternative to native `Array.prototype.reverse`

## Install

```
$ npm install --save @arr/reverse
```

## Usage

```js
import reverse from '@arr/reverse';

let a = ['one', 'two', 'three'];
let reversed = reverse(a);

console.log(a);
//=> ['three', 'two', 'one']
console.log(reversed);
//=> ['three', 'two', 'one']
```

## API

### reverse(arr)

#### arr
Type: `Array`<br>
The array to iterate upon.


## License

MIT © [Luke Edwards](http://lukeed.com)
