import curry2 from '../_internal/_curry2'

export default curry2(function drop(n, from) {
  return n <= 0 ? from : from.slice(n)
})
