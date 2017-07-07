export default function (arr, fn) {
	var i=0, len=arr.length;

	for (; i < len; i++) {
		fn(arr[i], i, arr);
	}
}
