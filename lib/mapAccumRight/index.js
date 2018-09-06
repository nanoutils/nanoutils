import curry3 from '../_internal/_curry3'

export default curry3(function mapAccumRight(cb, init, arr) {
  var accum = new Array(arr.length)
  var value = init
  var i = arr.length - 1
  while (i >= 0) {
    var v = cb(arr[i], value)
    value = v[1]
    accum[i--] = v[0]
  }
  return [accum, value]
})
