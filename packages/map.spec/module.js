export default function (arr, fn) {
	if (arr == null) {
		return [];
	}

	var i, out=new Array(arr.length);

	for (i in arr) {
		out[i] = fn(arr[i], +i, arr);
	}

	return out;
}
