'use strict';
const test = require('tape');
const fn = require('../packages/map');

const dbl = x => x * 2;
const foo = [1, 5, 10, 15];
const bar = ['a', undefined, void 0, , 'b'];

test('@arr/map', t => {
	const a = fn(foo, dbl);
	const b = foo.map(dbl);
	t.deepEqual(a, b, 'matches native output');
	t.deepEqual(a, [2,10,20,30], 'is expected output');
	t.deepEqual(foo, [1,5,10,15], 'original array remains');

	let x = 0;
	fn(bar, _ => x++);
	t.equal(x, bar.length, 'iterates thru all slots; incl `undefined` & holes');

	let y = 0;
	bar.map(_ => y++);
	t.notEqual(b, a, 'does not match native behavior; re: holes & undefined');
	t.equal(y, 4, 'native iterates all except holes');

	t.end();
});

test('@arr/map - callback', t => {
	const cb = (val, idx, arr) => `${val}-${idx}-${arr.length}`;
	const x = fn(foo, cb);
	const y = foo.map(cb);
	t.deepEqual(x, y, 'callback string matches');
	t.deepEqual(x, ['1-0-4', '5-1-4', '10-2-4', '15-3-4'], 'is expected output');

	let i = 0;
	fn(foo, (val, idx, arr) => {
		t.equal(val, foo[i], 'receives current value as 1st param');
		t.equal(idx, i, 'receives current index as 2nd param');
		t.deepEqual(arr, foo, 'receives array as 3rd param');
		i++;
	});
	t.end();
});
