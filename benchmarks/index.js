const mri = require('mri');

const argv = mri(process.argv.slice(2));
const type = argv.type || '**';
const size = argv.size || '*';
const fn = argv._[0] || '**';

const suite = require('benchmarked')({
	code: `code/${fn}/*.js`,
	cwd: __dirname
});

suite.addFixtures(`code/${fn}/data/${type}/${size}.js`, { ignore:'fn.js' });

suite.run();
