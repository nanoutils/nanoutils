import curry2 from '../_internal/_curry2'

export default curry2(function apply(fn, args) {
  return fn.apply(fn, args)
})
