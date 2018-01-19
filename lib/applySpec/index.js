import curry from '../curry'
import toArray from '../toArray'

export default curry(function applySpec(cbs, arg1) {
  var args = toArray(arguments).slice(1)
  return Object.keys(cbs).reduce(function(res, cur) {
    res[cur] =
      typeof cbs[cur] === 'object'
        ? applySpec.apply(applySpec, [cbs[cur]].concat(args))
        : cbs[cur].apply(cbs[cur], args)
    return res
  }, {})
})
