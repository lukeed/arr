const Table = require('cli-table2');
const { Suite } = require('benchmark');
const arrFlatten = require('arr-flatten');
const arrayFlatten = require('array-flatten');
const flattenArray = require('flatten-array');
const lodash = require('lodash.flattendeep');
const fast = require('fast.js').flatten;
const flatten = require('flatten');
const curr = require('../');

const bench = new Suite();
const foo = [[['a', ['b', ['k', ['a', ['b', ['c']], ['a', ['x', ['c'], ['a', ['x', ['k']]], ['d', ['z']]]], ['d', ['m']]], ['d', ['e']]]]], ['d', ['e']]]];

bench
	// .add('native', () => foo.map(bar))
	.add('current', () => curr(foo))
	.add('arr-flatten', () => arrFlatten(foo))
	.add('array-flatten', () => arrayFlatten(foo))
	.add('fast.flatten', () => fast(foo))
	.add('flatten-array', () => flattenArray(foo))
	.add('lodash.flattendeep', () => lodash(foo))
	.on('complete', function() {
		console.log('Fastest is ' + this.filter('fastest').map('name'));

		const tbl = new Table({
			head: ['Name', 'Mean time', 'Ops/sec', 'Diff']
		});

		let prev, diff;

		bench.forEach(el => {
			if (prev) {
				diff = ((el.hz - prev) * 100 / prev).toFixed(2) + '% faster';
			} else {
				diff = 'N/A'
			}
			prev = el.hz;
			tbl.push([el.name, el.stats.mean, el.hz.toLocaleString(), diff])
		});
		console.log(tbl.toString());
	})
	.run();
