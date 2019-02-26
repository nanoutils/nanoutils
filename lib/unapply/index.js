import curry1more from '../_internal/_curry1more'

export default curry1more(function unapply(fn) {
  return fn.call(fn, [].slice.call(arguments, 1))
})
