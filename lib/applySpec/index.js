import _curry2more from '../_internal/_curry2more'

export default _curry2more(function applySpec(cbs) {
  var args = [].slice.call(arguments, 1)
  return Object.keys(cbs).reduce(function(res, cur) {
    res[cur] = typeof cbs[cur] === 'object'
      ? applySpec.apply(applySpec, [cbs[cur]].concat(args))
      : cbs[cur].apply(cbs[cur], args)
    return res
  }, {})
})
