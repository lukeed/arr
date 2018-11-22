const size = require('gzip-size');
const Table = require('cli-table2');
const bytes = require('pretty-bytes');
const minify = require('terser').minify;

const out = {};
const tbl = new Table({ head:['Package', 'Minified', 'Gzipped'] });

exports.build = function * (task) {
	yield task.source('packages/*/module.js').run({}, function * (file) {
		const data = file.data.toString().replace('export default', 'module.exports =');
		file.base = 'index.js';
		file.data = data;
		const min = minify(data, { toplevel:true }).code;
		out[file.dir] = { min:bytes(min.length), gzip:bytes(size.sync(min)) };
	}).target('packages');

	for (const k in out) {
		tbl.push([k, out[k].min, out[k].gzip]);
	}

	console.log(tbl.toString());
}
