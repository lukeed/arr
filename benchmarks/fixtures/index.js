const random = require('./random');

const sizes = [ 100, 500, 1000, 5000, 10000 ];
const types = { str:'string', int:'number', obj:'object', arr:'array' };

let i, fn;
for (fn in types) {
	for (i=0; i < sizes.length; i++) {
		exports[`Array<${ types[fn] }>(${ sizes[i] })`] = random[fn](sizes[i]);
	}
}
