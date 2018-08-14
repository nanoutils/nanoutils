import curry2 from '../_internal/_curry2'

export default curry2(function bind(fn, context) {
  return fn.bind(context)
})
