import curry3 from '../_internal/_curry3'

export default curry3(function zipWith(cb, arr1, arr2) {
  var arr = []
  if (arr1 && arr1.length > 0 && arr2 && arr2.length > 0) {
    var len = arr1.length > arr2.length ? arr2.length : arr1.length
    for (var i = 0; i < len; i++) {
      arr.push(cb(arr1[i], arr2[i]))
    }
  }
  return arr
})
