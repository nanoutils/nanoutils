import curry3 from '../_internal/_curry3'

export default curry3(function adjust(fn, i, arr) {
  var result = arr.slice()
  if (!arr[i]) return result
  result[i] = fn(result[i])
  return result
})
