const lodash = require('lodash.reverse');
const fastjs = require('fast.js').reverse;
const compute = require('compute-reverse');
const curr = require('../../../packages/reverse');

exports['native'] = arr => arr.reverse();
exports['@arr/reverse'] = arr => curr(arr);
exports['compute-reverse'] = arr => compute(arr);
exports['fastjs.reverse'] = arr => fastjs(arr);
exports['lodash.reverse'] = arr => lodash(arr);
