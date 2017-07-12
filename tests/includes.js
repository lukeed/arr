'use strict';
const test = require('tape');
const fn = require('../packages/includes');

const isRecent = parseFloat(process.version.substr(1)) > 6;

const foo = ['a', 'b', 'c', 'd'];

test('@arr/includes', t => {
	const a = fn(foo, 'c');
	const b = fn(foo, 'g');
	const c = fn(foo, 'b', 2);

	t.is(a, true, 'is expected output');
	t.is(b, false, 'is expected output');
	t.is(c, false, 'respects `fromIndex` param');

	if (isRecent) {
		t.equal(a, foo.includes('c'), 'matches native output');
		t.equal(b, foo.includes('g'), 'matches native output');
		t.equal(c, foo.includes('b', 2), 'matches native output');
	}

	t.end();
});

