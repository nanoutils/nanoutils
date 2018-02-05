import curry2 from '../_internal/_curry2'

export default curry2(function is(constructor, val) {
  return val != null
    ? val.constructor === constructor
    : val === constructor
})
