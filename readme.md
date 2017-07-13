# arr [![Build Status](https://travis-ci.org/lukeed/arr.svg?branch=master)](https://travis-ci.org/lukeed/arr)

> A collection of tiny, highly performant `Array.prototype` alternatives and extra utilities.

All exports are offered as CommonJS and ES6 modules. Additionally, every entry is ES3 code, which means that each package is ready for & compatible with any Browser or Node version!

Please view each package's readme for Usage and important information! :pray:

> :warning: **Note:** Most functions have _slight differences_ from the native built-ins!

To view extensive benchmark results, visit the [Benchmarks section](/benchmarks).

| Package | Version | Minified | Node 4 | Node 6 | Node 7 | Node 8 |
|---------|:-------:|:-----:|:------:|:------:|:------:|:------:|
| [`every`](/packages/every) | [![npm](https://img.shields.io/npm/v/@arr/every.svg?maxAge=86400)](https://www.npmjs.com/package/@arr/every) | 95 B | :white_check_mark: | -- | -- | -- |
| [`filter`](/packages/filter) | [![npm](https://img.shields.io/npm/v/@arr/filter.svg?maxAge=86400)](https://www.npmjs.com/package/@arr/filter) | 101 B | :white_check_mark: | -- | -- | -- |
| [`filter.mutate`](/packages/filter.mutate) | [![npm](https://img.shields.io/npm/v/@arr/filter.mutate.svg?maxAge=86400)](https://www.npmjs.com/package/@arr/filter.mutate) | 90 B | :white_check_mark: | -- | -- | -- |
| [`find`](/packages/find) | [![npm](https://img.shields.io/npm/v/@arr/find.svg?maxAge=86400)](https://www.npmjs.com/package/@arr/find) | 91 B | :white_check_mark: | -- | -- | -- |
| [`findIndex`](/packages/findIndex) | [![npm](https://img.shields.io/npm/v/@arr/findindex.svg?maxAge=86400)](https://www.npmjs.com/package/@arr/findindex) | 94 B | :white_check_mark: | -- | -- | -- |
| [`flatten`](/packages/flatten) | [![npm](https://img.shields.io/npm/v/@arr/flatten.svg?maxAge=86400)](https://www.npmjs.com/package/@arr/flatten) | 151 B | :wavy_dash: | -- | -- | -- |
| [`forEach`](/packages/forEach) | [![npm](https://img.shields.io/npm/v/@arr/foreach.svg?maxAge=86400)](https://www.npmjs.com/package/@arr/foreach) | 73 B | :white_check_mark: | -- | -- | -- |
| [`includes`](/packages/includes) | [![npm](https://img.shields.io/npm/v/@arr/includes.svg?maxAge=86400)](https://www.npmjs.com/package/@arr/includes) | 95 B | :wavy_dash: | -- | -- | -- |
| [`map`](/packages/map) | [![npm](https://img.shields.io/npm/v/@arr/map.svg?maxAge=86400)](https://www.npmjs.com/package/@arr/map) | 122 B | :white_check_mark: | -- | -- | -- |
| [`reduce`](/packages/reduce) | [![npm](https://img.shields.io/npm/v/@arr/reduce.svg?maxAge=86400)](https://www.npmjs.com/package/@arr/reduce) | 137 B | :white_check_mark: | -- | -- | -- |
| [`reduceRight`](/packages/reduceRight) | [![npm](https://img.shields.io/npm/v/@arr/reduceright.svg?maxAge=86400)](https://www.npmjs.com/package/@arr/reduceright) | 130 B | :white_check_mark: | -- | -- | -- |
| [`reverse`](/packages/reverse) | [![npm](https://img.shields.io/npm/v/@arr/reverse.svg?maxAge=86400)](https://www.npmjs.com/package/@arr/reverse) | 136 B | :white_check_mark: | -- | -- | -- |
| [`some`](/packages/some) | [![npm](https://img.shields.io/npm/v/@arr/some.svg?maxAge=86400)](https://www.npmjs.com/package/@arr/some) | 94 B | :white_check_mark: | -- | -- | -- |
| [`unique`](/packages/unique) | [![npm](https://img.shields.io/npm/v/@arr/unique.svg?maxAge=86400)](https://www.npmjs.com/package/@arr/unique) | 111 B | :wavy_dash: | -- | -- | -- |

> :white_check_mark: &mdash; Denotes function **is** faster than native <br>
> :no_entry_sign: &mdash; Denotes function **is not** faster than native <br>
> :mag: &mdash; Denotes function **is sometimes** faster than native <br>
> :wavy_dash: &mdash; Denotes function has no native counterpart <br>

## License

MIT © [Luke Edwards](http://lukeed.com)
