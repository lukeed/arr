export default function (arr, cb) {
	var len = arr.length;

	while (len--) {
		cb(arr[len], len, arr) || arr.splice(len, 1);
	}

	return arr;
}
