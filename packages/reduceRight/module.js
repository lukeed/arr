export default function (arr, fn, val) {
	if (arr == null) {
		return [];
	}

	var i=arr.length, out=val;

	if (out === void 0) {
		i--;
		out = arr[i];
	}

	while (i--) {
		out = fn(out, arr[i], i, arr);
	}

	return out;
}
