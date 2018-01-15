import a2p from '../a2p'
import ary from '../ary'
import p2a from '../p2a'

export default ary(1, function objToFlat(obj, nest) {
  var nest = p2a(nest)
  return Object.keys(obj).reduce(function(res, key) {
    if (
      obj[key] !== null &&
      typeof obj[key] === 'object' &&
      !Array.isArray(obj[key])
    ) {
      var n = objToFlat(obj[key], nest.concat(key))
      Object.keys(n).forEach(function(k) {
        res[k] = n[k]
      })
    } else {
      res[a2p(nest.concat(key))] = obj[key]
    }
    return res
  }, {})
})
