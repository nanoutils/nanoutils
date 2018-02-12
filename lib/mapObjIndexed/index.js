import curry2 from '../_internal/_curry2'

export default curry2(function mapObjIndexed(cb, obj) {
  return Object.keys(obj).reduce(function(res, key) {
    res[key] = cb(obj[key], key, obj)
    return res
  }, {})
})
