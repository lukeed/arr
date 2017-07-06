export default function (arr, fn, val) {
	if (arr == null) {
		return [];
	}

	var i=0, len=arr.length, out=val;

	if (out === void 0) {
		out = arr[0];
		i = 1;
	}

	for (; i < len; i++) {
		out = fn(out, arr[i], i, arr);
	}

	return out;
}
