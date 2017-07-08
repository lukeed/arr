const ramda = require('ramda').forEach;
const lodash = require('lodash.foreach');
const fastjs = require('fast.js').forEach;
const curr = require('../../packages/forEach');
const spec = require('../../packages/forEach.spec');

const cb = x => x;

exports['native'] = arr => arr.forEach(cb);
exports['@arr/forEach'] = arr => curr(arr, cb);
exports['@arr/forEach.spec'] = arr => spec(arr, cb);
exports['fastjs.forEach'] = arr => fastjs(arr, cb);
exports['lodash.foreach'] = arr => lodash(arr, cb);
exports['ramda.forEach'] = arr => ramda(cb, arr);
