'use strict';
const test = require('tape');
const fn = require('../packages/some');

const isBiggerThan10 = x => x > 10;
const foo = [12, 5, 8, 1, 4];
const bar = [2, 5, 8, 1, 4];

test('@arr/some', t => {
	const a = fn(foo, isBiggerThan10);
	t.equal(a, foo.some(isBiggerThan10), 'matches native output');
	t.equal(a, true, 'is expected output');

	const b = fn(bar, isBiggerThan10);
	t.equal(b, bar.some(isBiggerThan10), 'matches native output');
	t.equal(b, false, 'is expected output');

	t.end();
});

test('@arr/some - callback', t => {
	let i = 0;
	fn(foo, (val, idx, arr) => {
		t.equal(val, foo[i], 'receives current value as 1st param');
		t.equal(idx, i, 'receives current index as 2nd param');
		t.deepEqual(arr, foo, 'receives array as 3rd param');
		i++;
	});
	t.end();
});
