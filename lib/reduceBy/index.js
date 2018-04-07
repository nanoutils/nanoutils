import curryN from '../curryN/curryN'

export default curryN(4, function reduceBy(reducer, init, by, list) {
  return list.reduce(function(res, cur) {
    var key = by(cur)
    if (!(key in res)) res[key] = init
    res[key] = reducer(res[key], cur)
    return res
  }, {})
})
