import curry2 from '../_internal/_curry2'

export default curry2(function min(a, b) {
  return a < b ? a : b
})
