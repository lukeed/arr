const arrReduce = require('arr-reduce');
const lodash = require('lodash.reduce');
const fastjs = require('fast.js').reduce;
const curr = require('../../../packages/reduce');

const cb = (a,b) => a.concat(b);

exports['native'] = arr => arr.reduce(cb);
exports['@arr/reduce'] = arr => curr(arr, cb);
exports['arr-reduce'] = arr => arrReduce(arr, cb);
exports['fastjs.reduce'] = arr => fastjs(arr, cb);
exports['lodash.reduce'] = arr => lodash(arr, cb);
