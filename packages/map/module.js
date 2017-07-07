export default function (arr, fn) {
	if (arr == null) {
		return [];
	}

	var i=0, len=arr.length, out=new Array(len);

	for (; i < len; i++) {
		if (arr[i] !== void 0) {
			out[i] = fn(arr[i], i);
		}
	}

	return out;
}
