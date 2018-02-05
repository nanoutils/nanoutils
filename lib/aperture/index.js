import curry2 from '../_internal/_curry2'

export default curry2(function aperture(n, arr) {
  return n > arr.length
    ? []
    : Array(arr.length - n + 1).fill(0).map(function(_, idx) {
        return arr.slice(idx, idx + n)
      })
})
