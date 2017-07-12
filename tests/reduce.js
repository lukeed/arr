'use strict';
const test = require('tape');
const fn = require('../packages/reduce');

const foo = [0, 1, 2, 3];
const bar = [[0, 1], [2, 3], [4, 5]];

test('@arr/reduce', t => {
	const a = fn(foo, (x,y) => x + y);
	const b = foo.reduce((x,y) => x + y);
	t.equal(a, b, 'matches native output');
	t.equal(a, 6, 'is expected output');

	const x = fn(bar, (j,k) => j.concat(k), []);
	const y = bar.reduce((j,k) => j.concat(k), []);
	t.deepEqual(x, y, 'matches native output');
	t.deepEqual(x, [0,1,2,3,4,5], 'is expected output');
	t.end();
});

test('@arr/reduce - callback', t => {
	let i=1, sum=0;
	fn(foo, (acc, val, idx, arr) => {
		if (sum === 0) {
			t.equal(acc, foo[0], 'accumulator defaults to first item in array if not defined');
		}
		t.equal(acc, sum, 'receives the accumulator as 1st param');
		t.equal(val, foo[i], 'receives the current value as 2nd param');
		t.equal(idx, i, 'receives the current index as 3rd param');
		t.deepEqual(arr, foo, 'receives the array as 4th param');
		i++; sum += val;
		return acc + val;
	});
	t.end();
});
