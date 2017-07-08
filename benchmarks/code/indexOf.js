const ramda = require('ramda').indexOf;
const lodash = require('lodash.indexof');
const fastjs = require('fast.js').indexOf;
const curr = require('../../packages/indexOf');

const val = 'foobar';

exports['native'] = arr => arr.indexOf(val);
exports['@arr/indexOf'] = arr => curr(arr, val);
exports['fastjs.indexOf'] = arr => fastjs(arr, val);
exports['lodash.indexof'] = arr => lodash(arr, val);
exports['ramda.indexOf'] = arr => ramda(val, arr);
