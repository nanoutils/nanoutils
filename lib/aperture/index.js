import curryN from '../curryN'

export default curryN(2, function aperture(n, arr) {
  return n > arr.length
    ? []
    : new Array(arr.length - n + 1).fill(null).map(function(_, idx) {
        return arr.slice(idx, idx + n)
      })
})
