const Table = require('cli-table2');
const { Suite } = require('benchmark');
const lodash = require('lodash.foreach');
const fast = require('fast.js').forEach;
const curr = require('../');

const bench = new Suite();
const bar = elem => (elem + elem);
const foo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

bench
	.add('native', () => foo.map(bar))
	.add('current', () => curr(foo, bar))
	.add('fast.forEach', () => fast(foo, bar))
	.add('lodash.forEach', () => lodash(foo, bar))
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
