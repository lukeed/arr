const lodash = require('lodash.some');
const fastjs = require('fast.js').some;
const curr = require('../../packages/some');

const cb = (x, idx, arr) => idx === Math.floor(arr.length * .85);

exports['native'] = arr => arr.some(cb);
exports['@arr/some'] = arr => curr(arr, cb);
exports['fastjs.some'] = arr => fastjs(arr, cb);
exports['lodash.some'] = arr => lodash(arr, cb);
