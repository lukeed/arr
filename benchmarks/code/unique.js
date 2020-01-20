const arrUniq = require('arr-uniq');
const ramda = require('ramda').uniq;
const lodash = require('lodash.uniq');
const arrayUniq = require('array-unique');
const curr = require('../../packages/unique');

function native(arr) {
	return [...new Set(arr)];
}

exports['native'] = arr => native(arr);
exports['@arr/unique'] = arr => curr(arr);
exports['arr-uniq'] = arr => arrUniq(arr);
exports['array-unique'] = arr => arrayUniq(arr);
exports['lodash.uniq'] = arr => lodash(arr);
exports['ramda.uniq'] = arr => ramda(arr);
