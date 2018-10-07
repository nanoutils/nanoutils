import curry2 from '../_internal/_curry2'

export default curry2(function apply(change, value) {
  return change.apply(change, value)
})
