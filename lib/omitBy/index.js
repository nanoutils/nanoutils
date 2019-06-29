import curry2 from '../_internal/_curry2'

export default curry2(function omitBy(cb, obj) {
  return Object.keys(obj).reduce((acc, key) => {
    if (!cb(obj[key], key)) acc[key] = obj[key]
    return acc
  }, {})
})
