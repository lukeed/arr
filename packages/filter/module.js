export default function (arr, cb) {
	var i=0, len=arr.length, res=[];
	for (; i < len; i++) {
		if (cb(arr[i], i, arr)) {
			res.push(arr[i]);
		}
	}
	return res;
}
