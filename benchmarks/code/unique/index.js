const arrUniq = require('arr-uniq');
const lodash = require('lodash.uniq');
const fastjs = require('fast.js').uniq;
const arrayUniq = require('array-unique');
const curr = require('../../../packages/unique');

const cb = x => x;

exports['native'] = arr => arr.uniq(cb);
exports['@arr/unique'] = arr => curr(arr, cb);
exports['arr-uniq'] = arr => arrUniq(arr, cb);
exports['array-unique'] = arr => arrayUniq(arr, cb);
exports['fastjs.uniq'] = arr => fastjs(arr, cb);
exports['lodash.uniq'] = arr => lodash(arr, cb);
