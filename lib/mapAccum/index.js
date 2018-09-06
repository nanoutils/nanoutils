import curry3 from '../_internal/_curry3'

export default curry3(function mapAccum(cb, init, arr) {
  var value = init
  var accum = new Array(arr.length)
  var i = 0
  while (i < arr.length) {
    var v = cb(value, arr[i])
    value = v[0]
    accum[i++] = v[1]
  }
  return [value, accum]
})
