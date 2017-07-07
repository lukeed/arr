const lodash = require('lodash.find');
const curr = require('../../../packages/find');

const cb = val => val.length > 6;

exports['native'] = arr => arr.find(cb);
exports['@arr/find'] = arr => curr(arr, cb);
exports['lodash.find'] = arr => lodash(arr, cb);
