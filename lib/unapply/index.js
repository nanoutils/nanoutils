import curry2more from '../_internal/_curry2more'

export default curry2more(function apply(fn) {
  return fn.call(fn, [].slice.call(arguments, 1))
})
