const ramda = require('ramda').filter;
const arrFilter = require('arr-filter');
const arrayFilter = require('array-filter');
const fastjs = require('fast.js').filter;
const lodash = require('lodash.filter');
const curr = require('../../packages/filter');

const cb = () => true;

exports['native'] = arr => arr.filter(cb);
exports['@arr/filter'] = arr => curr(arr, cb);
exports['arr-filter'] = arr => arrFilter(arr, cb);
exports['array-filter'] = arr => arrayFilter(arr, cb);
exports['lodash.filter'] = arr => lodash(arr, cb);
exports['fastjs.filter'] = arr => fastjs(arr, cb);
exports['ramda.filter'] = arr => ramda(cb, arr);
