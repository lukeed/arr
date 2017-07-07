const lpad = require('pad-left');
const rpad = require('pad-right');
const { dirname } = require('path');
const clone = require('lodash.clone');
const { green, blue } = require('chalk');
const { sync } = require('glob');

const LOOPS = 30000;
const cwd = __dirname;

const RGX = /(\d)(?=(\d{3})+\.)/g;
const toNum = int => (int || 0).toFixed(2).replace(RGX, '$1,');
const toMs = arr => Math.round(arr[1] / 1000000);

const glob = str => sync(str, { cwd });

function retrieve(fn, type, size) {
	const dir = dirname(fn);
	const data = glob(`${dir}/data-${type || '*'}-${size || '*'}.js`).filter(Boolean);
	return {
		funcs: require(`./${fn}`),
		datas: data.map(s => require(`./${s}`))
	};
}

function test(name, func, data) {
	let i = 0;
	const start = process.hrtime();
	for (; i < LOOPS; i++) {
		func(data);
	}
	const ms = toMs(process.hrtime(start));
	const ops = toNum(data.length * LOOPS * 1000 / ms);
	return { name, ms, ops };
}

const maxlen = (arr,k) => arr.reduce((a,b) => a[k].length > b[k].length ? a : b)[k].length;

function report(arr) {
	let i=0, len=arr.length;
	const fastest = arr.reduce((a,b) => a.ms < b.ms ? a : b);
	arr = arr.map(o => ({ name:o.name, ms:o.ms+'ms', ops:o.ops+' op/s' }));
	const max = { ms:maxlen(arr, 'ms'), name:maxlen(arr, 'name'), ops:maxlen(arr, 'ops') };

	for (; i < len; i++) {
		console.log(`${ rpad(arr[i].name, max.name, ' ') }   ⇝   ${ lpad(arr[i].ms, max.ms, ' ') }   @   ${ lpad(arr[i].ops, max.ops, ' ') }`);
	}
	console.log(blue('\n  ➤ ') + 'Fastest is: ' + green(fastest.name) + '!\n\n');
}

function run(fns, data) {
	let k, arr, res=[];
	for (k in fns) {
		arr = clone(data); // `reduce` mutates
		res.push( test(k, fns[k], arr) );
	}
	report(res);
}

module.exports = { glob, retrieve, run };
