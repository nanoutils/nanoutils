import curry2 from '../_internal/_curry2'

export default function evolve(cbs, obj) {
  return Object.keys(obj).reduce(function(res, key) {
    res[key] = cbs[key]
      ? typeof cbs[key] === 'object'
        ? evolve(cbs[key], obj[key])
        : cbs[key](obj[key])
      : obj[key]
    return res
  }, {})
}
