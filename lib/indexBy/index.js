import curry2 from '../_internal/_curry2'

export default curry2(function indexBy(cb, list) {
  return list.reduce(function(obj, cur) {
    obj[cb(cur)] = cur
    return obj
  }, {})
})
