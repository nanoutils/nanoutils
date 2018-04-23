import curry3 from '../_internal/_curry3'

export default curry3(function adjust(fn, i, arr) {
  if (!arr[i]) return arr
  var result = arr.slice()
  result[i] = fn(result[i])
  return result
})
