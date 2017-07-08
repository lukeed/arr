const cc = require('chalk');
const mri = require('mri');
const $ = require('./fn');

const argv = mri(process.argv.slice(2));
const codes = $.glob(`code/${argv._[0] || '*'}.js`);

let i=0, len=codes.length, k;
for (; i < len; i++) {
	const { funcs, datas } = $.retrieve(codes[i], argv.type, argv.size);
	for (k in datas) {
		$.run(funcs, datas[k], `Benchmark: ${ cc.cyan(codes[i]) } • ${ cc.yellow(k) }`);
	}
}
