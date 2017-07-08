const ramda = require('ramda').reduce;
const arrReduce = require('arr-reduce');
const lodash = require('lodash.reduce');
const fastjs = require('fast.js').reduce;
const curr = require('../../packages/reduce');

const val = [];
const cb = _ => true;

exports['native'] = arr => arr.reduce(cb, val);
exports['@arr/reduce'] = arr => curr(arr, cb, val);
exports['arr-reduce'] = arr => arrReduce(arr, cb, val);
exports['fastjs.reduce'] = arr => fastjs(arr, cb, val);
exports['lodash.reduce'] = arr => lodash(arr, cb, val);
exports['ramda.reduce'] = arr => ramda(cb, val, arr);
