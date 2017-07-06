const size = require('gzip-size');
const Table = require('cli-table2');
const bytes = require('pretty-bytes');
const { minify } = require('uglify-js');

const out = {};
const tbl = new Table({ head:['Package', 'Minified', 'Gzipped'] });

exports.build = function * (task) {
	yield task.source('packages/*/module.js').run({}, function * (file) {
		const data = file.data.toString().replace('export default', 'module.exports =');
		file.base = 'index.js';
		file.data = data;
		const { code } = minify(data, { fromString:true });
		out[file.dir] = { min:bytes(code.length), gzip:bytes(size.sync(code)) };
	}).target('packages');

	for (const k in out) {
		tbl.push([k, out[k].min, out[k].gzip]);
	}

	console.log(tbl.toString());
}
