'use strict';

const randomize = require('randomatic');

const rand = (x, y) => Math.floor(Math.random() * y) + x;

exports.str = num => loop(num, _ => randomize('*', rand(8, 16)));

exports.int = num => loop(num, idx => Math.random() * (idx + 1) * 1e8 | 0);

exports.obj = num => loop(num, idx => genObj(rand(8,16), idx));

exports.arr = num => loop(num, idx => genArr(rand(8,16), idx));

function loop(num, cb) {
	let res=new Array(num);
	while (num--) res[num] = cb(num);
	return res;
}

function genObj(len, idx) {
	let i=0, out={};
	for (; i < len; i++) {
		out[ randomize('a',8) ] = idx % 3 ? randomize('*', rand(8, 16)) : genObj(rand(4, 8), 1);
	}
	return out;
}

function genArr(len, idx) {
	let i=0, out=new Array(len);
	for (; i < len; i++) {
		out[i] = idx % 3 ? randomize('*', rand(8, 16)) : genArr(rand(4, 8), 1);
	}
	return out;
}
