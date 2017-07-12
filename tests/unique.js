'use strict';
const test = require('tape');
const fn = require('../packages/unique');

const foo = ['a', 'b', 'c', 'a', 'b', 'd'];
const bar = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7, 2, 8];

test('@arr/unique', t => {
	t.deepEqual(fn(foo), ['a', 'b', 'c', 'd']);
	t.deepEqual(fn(bar), [1, 2, 3, 4, 5, 6, 7, 8]);
	t.end();
});
