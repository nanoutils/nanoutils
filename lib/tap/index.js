import curry2 from '../_internal/_curry2'

export default curry2((cb, ...args) => {
  cb(...args)
  return args[0]
})
