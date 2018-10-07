import curry2 from '../_internal/_curry2'

export default curry2(function applyTo(value, change) {
  return change(value)
})
