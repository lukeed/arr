const ramda = require('ramda').reduceRight;
const lodash = require('lodash.reduceright');
const fastjs = require('fast.js').reduceRight;
const curr = require('../../packages/reduceRight');

const val = [];
const cb = _ => true;

exports['native'] = arr => arr.reduceRight(cb);
exports['@arr/reduceRight'] = arr => curr(arr, cb);
exports['fastjs.reduceRight'] = arr => fastjs(arr, cb);
exports['lodash.reduceright'] = arr => lodash(arr, cb);
exports['ramda.reduceRight'] = arr => ramda(cb, val, arr);
