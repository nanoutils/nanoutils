import curry3 from '../_internal/_curry3'

export default curry3(function ifElse(cond, a, b) {
  return function(d) {
    return cond(d) ? a(d) : b(d)
  }
})
