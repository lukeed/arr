const lodash = require('lodash.reduceright');
const fastjs = require('fast.js').reduceRight;
const curr = require('../../../packages/reduceRight');

const cb = (a,b) => a.concat(b);

exports['native'] = arr => arr.reduceRight(cb);
exports['@arr/reduceRight'] = arr => curr(arr, cb);
exports['fastjs.reduceRight'] = arr => fastjs(arr, cb);
exports['lodash.reduceright'] = arr => lodash(arr, cb);
