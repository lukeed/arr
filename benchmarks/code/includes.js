const curr = require('../../packages/includes');

const val = 'foobar';

exports['native'] = arr => arr.includes(val);
exports['@arr/includes'] = arr => curr(arr, val);
