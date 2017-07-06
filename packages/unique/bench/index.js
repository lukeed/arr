const Table = require('cli-table2');
const { Suite } = require('benchmark');
const arrayUniq = require('array-uniq');
const lodash = require('lodash.uniq');
const curr = require('../');

const bench = new Suite();
const foo = [1,2,2,3,1,2,4,7,4,3,1,4,8,3,1,4,7,3,1,3,0,5,12,18,21,11,9,6,3,1];

bench
	// .add('native', () => foo.indexOf(bar))
	.add('current', () => curr(foo))
	.add('array-uniq', () => arrayUniq(foo))
	.add('lodash.uniq', () => lodash(foo))
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
