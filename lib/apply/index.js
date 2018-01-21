import curryN from '../curryN'

export default curryN(2, function apply(fn, arg) {
  return fn.apply(fn, arg)
})
