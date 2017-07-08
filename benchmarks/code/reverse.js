const ramda = require('ramda').reverse;
const lodash = require('lodash.reverse');
const compute = require('compute-reverse');
const curr = require('../../packages/reverse');

exports['native'] = arr => arr.reverse();
exports['@arr/reverse'] = arr => curr(arr);
exports['compute-reverse'] = arr => compute(arr);
exports['lodash.reverse'] = arr => lodash(arr);
exports['ramda.reverse'] = arr => ramda(arr);
