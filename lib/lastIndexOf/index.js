import curry2 from '../_internal/_curry2'

export default curry2((val, obj) =>
  obj != null && typeof obj.lastIndexOf === 'function'
    ? obj.lastIndexOf(val)
    : -1,
)
