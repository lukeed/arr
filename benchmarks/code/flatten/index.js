const flatten = require('flatten');
const arrFlat = require('arr-flatten');
const fastjs = require('fast.js').flatten;
const flatArray = require('flatten-array');
const arrayFlat = require('array-flatten');
const lodash = require('lodash.flattendeep');
const curr = require('../../../packages/flatten');

exports['@arr/flatten'] = arr => curr(arr);
exports['arr-flatten'] = arr => arrFlat(arr);
exports['array-flatten'] = arr => arrayFlat(arr);
exports['fastjs.flatten'] = arr => fastjs(arr);
exports['flatten'] = arr => flatten(arr);
exports['flatten-array'] = arr => flatArray(arr);
exports['lodash.flattendeep'] = arr => lodash(arr);
