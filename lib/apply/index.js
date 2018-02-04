import curry2 from '../_internal/_curry2'

export default curry2(function apply(fn, arg) {
  return fn.apply(fn, arg)
})
