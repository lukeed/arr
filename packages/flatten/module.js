function flat(arr, res) {
	var i=0, cur, len=arr.length;
	for (; i < len; i++) {
		cur = arr[i];
		Array.isArray(cur) ? flat(cur, res) : res.push(cur);
	}
	return res;
}

export default function (arr) {
	return flat(arr, []);
}
