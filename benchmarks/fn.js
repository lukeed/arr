const chalk = require('chalk');
const lpad = require('pad-left');
const rpad = require('pad-right');
const clone = require('lodash.clone');
const sync = require('glob').sync;
const gen = require('./fixtures');

const LOOPS = 30000;
const cwd = __dirname;

const RGX = /(\d)(?=(\d{3})+\.)/g;
const toNum = int => (int || 0).toFixed(2).replace(RGX, '$1,');
const toNano = arr => arr[0] * 1e9 + arr[1];

const glob = str => sync(str, { cwd });

function retrieve(file, type, size) {
	console.log(chalk.dim('> Constructing all fixture data'));
	const funcs = require(`./${file}`);
	const datas = gen(type, size);
	console.log(chalk.dim('> Fixtures ready!'));
	return { funcs, datas };
}

function test(name, func, data) {
	let i = 0;
	const start = process.hrtime();
	for (; i < LOOPS; i++) {
		func(data);
	}
	const ms = toNano(process.hrtime(start)) / 1e6;
	const ops = toNum(data.length * LOOPS * 1000 / ms);
	return { name, ms, ops };
}

const maxlen = (arr,k) => arr.reduce((a,b) => a[k].length > b[k].length ? a : b)[k].length;

function report(arr, testname) {
	let i=0, len=arr.length;
	const fastest = arr.reduce((a,b) => a.ms <= b.ms ? a : b);
	arr = arr.map(o => ({ name:o.name, ms:toNum(o.ms)+'ms', ops:o.ops+' op/s' }));
	const max = { ms:maxlen(arr, 'ms'), name:maxlen(arr, 'name'), ops:maxlen(arr, 'ops') };

	console.log(testname);
	for (; i < len; i++) {
		console.log(`  ${ rpad(arr[i].name, max.name, ' ') }   ⇝   ${ lpad(arr[i].ms, max.ms, ' ') }   @   ${ lpad(arr[i].ops, max.ops, ' ') }`);
	}
	console.log(chalk.blue('\n    ➤ ') + 'Fastest is: ' + chalk.green(fastest.name) + '!\n\n');
}

function run(fns, data, testname) {
	let k, arr, res=[];
	for (k in fns) {
		arr = clone(data); // `reduce` mutates
		res.push( test(k, fns[k], arr) );
	}
	report(res, testname);
}

module.exports = { glob, retrieve, run };
