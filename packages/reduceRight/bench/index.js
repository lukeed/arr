const Table = require('cli-table2');
const { Suite } = require('benchmark');
const lodash = require('lodash.reduceright');
const fast = require('fast.js').reduceRight;
const curr = require('../');

const bench = new Suite();
const bar = (a, b) => a.concat(b);
const foo = [[0, 1], [2, 3], [4, 5]];

bench
	.add('native', () => foo.reduceRight(bar, []))
	.add('current', () => curr(foo, bar, []))
	.add('fast.reduceRight', () => fast(foo, bar, []))
	.add('lodash.reduceRight', () => lodash(foo, bar, []))
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
