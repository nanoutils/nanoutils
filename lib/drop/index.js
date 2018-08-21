import curry2 from '../_internal/_curry2'

export default curry2(function drop(n, from) {
  if (n <= 0) {
    return from
  }
  return from.slice(n)
})
