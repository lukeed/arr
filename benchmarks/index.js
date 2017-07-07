const mri = require('mri');
const $ = require('./fn');

const argv = mri(process.argv.slice(2));
const codes = $.glob(`code/${argv._[0] || '**'}/index.js`);

let i=0, len=codes.length, j;
for (; i < len; i++) {
	const { funcs, datas } = $.retrieve(codes[i], argv.type, argv.size);

	for (j=0; j < datas.length; j++) {
		$.run(funcs, datas[j]);
	}
}
