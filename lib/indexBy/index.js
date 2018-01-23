import curryN from '../curryN'

export default curryN(2, function indexBy(cb, list) {
  return list.reduce(function(obj, cur) {
    obj[cb(cur)] = cur
    return obj
  }, {})
})
