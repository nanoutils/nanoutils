import curry2 from '../_internal/_curry2'

export default curry2(function tap(cb, data, ...args) {
  cb(...args)
  return data
})
