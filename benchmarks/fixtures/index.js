'use strict';

const dim = require('chalk').dim;
const random = require('./random');

const SIZES = [ 100, 500, 1000, 5000, 10000 ];
const TYPES = { string:'str', number:'int', object:'obj', array:'arr' };

module.exports = function (type, size) {
	const types = type ? [type] : Object.keys(TYPES).filter(k => k !== 'array');
	const sizes = size ? [size] : SIZES;

	if (type || size) {
		console.log(dim(`> Filtering fixtures`));
	}

	let i=0, j, fn, out={};
	for (i; i < types.length; i++) {
		fn = TYPES[ types[i] ]; // randomizer
		for (j=0; j < sizes.length; j++) {
			out[`Array<${ types[i] }>(${ sizes[j] })`] = random[fn](sizes[j]);
		}
	}

	return out;
}
