const Table = require('cli-table2');
const { Suite } = require('benchmark');
const arrReduce = require('arr-reduce');
const lodash = require('lodash.reduce');
const fast = require('fast.js').reduce;
const curr = require('../');

const bench = new Suite();
const bar = (cur, val) => (cur + val);
const foo = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30];

bench
	.add('native', () => foo.reduce(bar, 0))
	.add('current', () => curr(foo, bar, 0))
	.add('arr-reduce', () => arrReduce(foo, bar, 0))
	.add('fast.reduce', () => fast(foo, bar, 0))
	.add('lodash', () => lodash(foo, bar, 0))
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
