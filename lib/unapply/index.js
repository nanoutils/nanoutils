import curry1more from '../_internal/_curry1more'

export default curry1more(function unapply(fn, ...args) {
  return fn(args)
})
