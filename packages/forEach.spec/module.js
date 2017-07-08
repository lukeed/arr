export default function (arr, fn) {
	var i;
	for (i in arr) {
		fn(arr[i], +i, arr);
	}
}
