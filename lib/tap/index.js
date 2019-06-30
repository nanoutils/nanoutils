import curry2 from '../_internal/_curry2'

export default curry2(function tap(cb, ...args) {
  cb(...args)
  return args[0]
})
