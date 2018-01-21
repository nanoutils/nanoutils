import curryN from '../curryN'

export default curryN(2, function omitBy(cb, obj) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (!cb(obj[key], key)) acc[key] = obj[key]
    return acc
  }, {})
})
