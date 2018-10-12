import curry2 from '../_internal/_curry2'

export default curry2(function defaultTo(defaultValue, value) {
  return value == null || isNaN(value)
    ? defaultValue
    : value
})
