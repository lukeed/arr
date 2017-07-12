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
	t.deepEqual(bar, foo, 'does NOT mutate the original array!');
	t.notDeepEqual(a, bar, 'output differs from original');
	t.end();
});

test('@arr/filter - callback', t => {
	const bar = [4, 5, 6];
	let x=0, y=bar[x];
	fn(bar, (val, idx, arr) => {
		t.equal(val, y, 'receives current value as 1st param (left-right)');
		t.equal(idx, x, 'receives current index as 2nd param (head-first)');
		t.deepEqual(arr, bar, 'receives array as 3rd param');
		x++; y++;
	});
	t.end();
});
