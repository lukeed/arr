export default function (arr) {
	if (arr == null) {
		return [];
	}

	var i=0, len=arr.length, j=len-1;
	var k, tmp, mid=len/2|0; // same as Math.floor

	for (; i < mid; i++) {
		tmp = arr[i];
		k = j - i;
		arr[i] = arr[k];
		arr[k] = tmp;
	}

	return arr;
}
