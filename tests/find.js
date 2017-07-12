'use strict';
const test = require('tape');
const fn = require('../packages/find');

const cb = x => x > 15;
const foo = [12, 5, 8, 130, 44];

test('@arr/find', t => {
	const a = fn(foo, cb);
	t.equal(a, foo.find(cb), 'matches native output');
	t.equal(a, 130, 'is expected output');
	t.end();
});

test('@arr/find - callback', t => {
	fn(foo, (val, idx, arr) => {
		t.equal(val, 12, 'receives current value as 1st param');
		t.equal(idx, 0, 'receives current index as 2nd param');
		t.deepEqual(arr, foo, 'receives array as 3rd param');
		return true; // early exit
	});
	t.end();
});
