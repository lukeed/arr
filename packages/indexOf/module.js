export default function (arr, val, idx) {
	var i=idx|0, len=arr.length;

	for (; i < len; i++) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1;
}
