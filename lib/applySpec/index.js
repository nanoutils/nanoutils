import curryN from '../curryN'
import toArray from '../toArray'

export default curryN(2, function applySpec(cbs) {
  var args = toArray(arguments).slice(1)
  return Object.keys(cbs).reduce(function(res, cur) {
    res[cur] =
      typeof cbs[cur] === 'object'
        ? applySpec.apply(applySpec, [cbs[cur]].concat(args))
        : cbs[cur].apply(cbs[cur], args)
    return res
  }, {})
})
