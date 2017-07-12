'use strict';
const test = require('tape');
const fn = require('../packages/reverse');

const foo = [5, 6, 7, 8, 9];

test('@arr/reverse', t => {
	const a = foo.slice();
	const b = foo.slice();

	const x = fn(a);
	const y = b.reverse();

	t.deepEqual(x, y, 'matches native output');
	t.deepEqual(x, [9,8,7,6,5], 'is expected output');
	t.deepEqual(a, x, 'mutates the original array');
	t.deepEqual(b, y, 'native also mutates orig');

	t.end();
});
