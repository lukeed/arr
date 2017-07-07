const lodash = require('lodash.lastindexof');
const fastjs = require('fast.js').lastIndexOf;
const curr = require('../../../packages/lastIndexOf');

const val = 'foobar';

exports['native'] = arr => arr.lastIndexOf(val);
exports['@arr/lastIndexOf'] = arr => curr(arr, val);
exports['fastjs.lastIndexOf'] = arr => fastjs(arr, val);
exports['lodash.lastindexof'] = arr => lodash(arr, val);
