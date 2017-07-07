const lodash = require('lodash.findindex');
const curr = require('../../../packages/findIndex');

const cb = val => val.length > 6;

exports['native'] = arr => arr.findIndex(cb);
exports['@arr/findIndex'] = arr => curr(arr, cb);
exports['lodash.findindex'] = arr => lodash(arr, cb);
