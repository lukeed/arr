const indexOf = require('@arr/indexOf');

export default function (arr) {
	var i=0, j, len=arr.length, out=[];

	for (; i < len; i++) {
		j = arr[len];
		if (indexOf(out, j, i) === -1) {
			out.push(j);
		}
	}

	return out;
}
