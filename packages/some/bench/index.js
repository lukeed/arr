const Table = require('cli-table2');
const { Suite } = require('benchmark');
const lodash = require('lodash.some');
const fast = require('fast.js').some;
const curr = require('../');

const bench = new Suite();
const foo = [12, 5, 8, 1, 4];
const bar = x => x > 10;

bench
	.add('native', () => foo.some(bar))
	.add('current', () => curr(foo, bar))
	.add('fast', () => fast(foo, bar))
	.add('lodash.some', () => lodash(foo, bar))
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
