'use strict';
const test = require('tape');
const fn = require('../packages/filter');

const foo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

test('@arr/filter', t => {
	const bar = foo.slice();
	const a = fn(bar, str => str > 3);
	const b = bar.filter(str => str > 3);
	t.deepEqual(a, b, 'matches native output');
	t.deepEqual(a, [4,5,6,7,8,9], 'filters correct output');
	t.notDeepEqual(bar, foo, 'mutates the original array!');
	t.deepEqual(a, bar, 'verifies the mutated output');
	t.end();
});

test('@arr/filter - callback', t => {
	const bar = [4, 5, 6];
	let x=6, y=2;
	fn(bar, (val, idx, arr) => {
		t.equal(val, x, 'receives current value as 1st param (right-left)');
		t.equal(idx, y, 'receives current index as 2nd param (tail-first)');
		t.deepEqual(arr, bar, 'receives array as 3rd param');
		x--; y--;
	});
	t.end();
});
