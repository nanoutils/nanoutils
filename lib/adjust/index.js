import curry3 from '../_internal/_curry3'

export default curry3(function adjust(fn, i, arr) {
  return !!arr[i]
    ? arr.map(function(it, k) {
        return k === i ? fn(it) : it
      })
    : arr
})
