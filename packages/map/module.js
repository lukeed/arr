export default function (arr, fn) {
	if (arr == null) {
		return [];
	}

	var i=0, len=arr.length, out=new Array(len);

	for (; i < len; i++) {
		out[i] = fn(arr[i], i, arr);
	}

	return out;
}
