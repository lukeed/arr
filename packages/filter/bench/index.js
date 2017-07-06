const Table = require('cli-table2');
const { Suite } = require('benchmark');
const arrFilter = require('arr-filter');
const arrayFilter = require('array-filter');
const lodash = require('lodash.filter');
const fast = require('fast.js').filter;
const curr = require('../');

const bench = new Suite();
const foo = ['a/b.js', 'a/c.js', 'a/e/d.js', 'a/d.js', 'a/b.md', 'a/c.md', 'a/e/d.md', 'a/d.md', 'a/b.txt', 'a/c.txt', 'a/e/d.txt', 'a/d.txt'];
const bar = str => /a\/.*\.txt/.test(str);

bench
	.add('native', () => foo.filter(bar))
	.add('current', () => curr(foo, bar))
	.add('arr-filter', () => arrFilter(foo, bar))
	.add('array-filter', () => arrFilter(foo, bar))
	.add('fast.filter', () => fast(foo, bar))
	.add('lodash', () => lodash(foo, bar))
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
