export default function (arr, val, idx) {
	var len=arr.length, i=idx||len-1;

	for (; i >= 0; i--) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1;
}
