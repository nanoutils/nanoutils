import curry2 from '../_internal/_curry2'

export default curry2(function range(from, to) {
  return Array(to - from).fill(null).map(function(val, idx) {
    return from + idx
  })
})
