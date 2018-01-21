import curry from '../curry'

export default curry(function apply(fn, arg) {
  return fn.apply(fn, arg)
})
