import curry2 from '../_internal/_curry2'

export default curry2((cb, obj) =>
  Object.keys(obj).reduce((res, key) => {
    res[key] = cb(obj[key], key, obj)
    return res
  }, {})
)
