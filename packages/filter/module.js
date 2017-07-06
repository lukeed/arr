export default function (arr, cb) {
  var len = arr.length;

  while (len--) {
    cb(arr[len]) || arr.splice(len, 1);
  }

  return arr;
}
