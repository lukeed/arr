const arrMap = require('arr-map');
const ramda = require('ramda').map;
const arrayMap = require('array-map');
const lodash = require('lodash.map');
const fastjs = require('fast.js').map;
const curr = require('../../../packages/map');

const cb = x => x;

exports['native'] = arr => arr.map(cb);
exports['@arr/map'] = arr => curr(arr, cb);
exports['arr-map'] = arr => arrMap(arr, cb);
exports['array-map'] = arr => arrayMap(arr, cb);
exports['fastjs.map'] = arr => fastjs(arr, cb);
exports['lodash.map'] = arr => lodash(arr, cb);
exports['ramda.map'] = arr => ramda(cb, arr);
