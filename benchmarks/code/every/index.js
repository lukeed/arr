const every = require('array-every');
const lodash = require('lodash.every');
const fastjs = require('fast.js').every;
const curr = require('../../../packages/every');

const cb = () => true;

exports['native'] = arr => arr.every(cb);
exports['@arr/map'] = arr => curr(arr, cb);
exports['array-every'] = arr => every(arr, cb);
exports['lodash.every'] = arr => lodash(arr, cb);
exports['fastjs.every'] = arr => fastjs(arr, cb);
