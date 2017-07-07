export default function (arr, fn) {
	var i=0, len=arr.length;

	for (; i < len; i++) {
		if (arr[i] !== void 0) {
			fn(arr[i], i, arr);
		}
	}
}
