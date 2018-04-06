import a2p from '../_internal/_a2p'
import p2a from '../_internal/_p2a'
import nAry from '../nAry'

export default nAry(1, function objToFlat(obj, nest) {
  var nestA = p2a(nest)
  return Object.keys(obj).reduce(function(res, key) {
    if (
      obj[key] !== null &&
      typeof obj[key] === 'object' &&
      !Array.isArray(obj[key])
    ) {
      var n = objToFlat(obj[key], nestA.concat(key))
      Object.keys(n).forEach(function(k) {
        res[k] = n[k]
      })
    } else {
      res[a2p(nestA.concat(key))] = obj[key]
    }
    return res
  }, {})
})
