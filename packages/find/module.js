export default function (arr, cb) {
	var cur, i=0, len=arr.length;

	for (; i < len; i++) {
		cur = arr[i];
		if (cb(cur, i, arr)) {
			return cur;
		}
	}
}
