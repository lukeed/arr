'use strict';
const test = require('tape');
const fn = require('../packages/every');

const foo = [12, 5, 8, 130, 44];
const bar = [12, 54, 18, 130, 44];
const isBigEnough = val => val >= 10;

test('@arr/every', t => {
	const a = fn(foo, isBigEnough);
	t.equal(a, foo.every(isBigEnough), 'matches native output');
	t.equal(a, false, 'is expected output');

	const b = fn(bar, isBigEnough);
	t.equal(b, bar.every(isBigEnough), 'matches native output');
	t.equal(b, true, 'is expected output');
	t.end();
});

test('@arr/every - callback', t => {
	fn(foo, (val, idx, arr) => {
		t.equal(val, 12, 'receives current value as 1st param');
		t.equal(idx, 0, 'receives current index as 2nd param');
		t.deepEqual(arr, foo, 'receives array as 3rd param');
		return false; // early exit
	});
	t.end();
});
