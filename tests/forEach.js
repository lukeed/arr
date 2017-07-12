'use strict';
const test = require('tape');
const fn = require('../packages/forEach');

const foo = ['a', 'b', 'c'];
const bar = ['a', undefined, void 0, , 'b'];

test('@arr/forEach', t => {
	let x='', y='';

	fn(foo, (val, idx, arr) => {
		x += `${val}-${idx}-${arr.length}`;
	});

	foo.forEach((val, idx, arr) => {
		y += `${val}-${idx}-${arr.length}`;
	});

	t.equal(x, y, 'matches native output');
	t.equal(x, 'a-0-3b-1-3c-2-3', 'is expected output');

	let a = 0;
	fn(bar, _ => a++);
	t.equal(a, bar.length, 'iterates thru all slots; incl `undefined` & holes');

	let b = 0;
	bar.forEach(_ => b++);
	t.notEqual(b, a, 'does not match native behavior; re: holes & undefined');
	t.equal(b, 4, 'native iterates all except holes');

	t.end();
});

test('@arr/forEach - callback', t => {
	let i = 0;
	fn(foo, (val, idx, arr) => {
		t.equal(val, foo[i], 'receives current value as 1st param');
		t.equal(idx, i, 'receives current index as 2nd param');
		t.deepEqual(arr, foo, 'receives array as 3rd param');
		i++;
	});
	t.end();
});
