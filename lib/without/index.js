import curry2 from '../_internal/_curry2'

export default curry2(function without(a, b) {
  return b.filter(item => !a.includes(item))
})
