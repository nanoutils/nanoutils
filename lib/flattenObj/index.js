import a2p from '../_internal/_a2p'
import p2a from '../_internal/_p2a'
import nAry from '../nAry'

const flattenObj = (obj, nest) => {
  var nestA = p2a(nest)
  return Object.keys(obj).reduce((res, key) => {
    if (
      obj[key] !== null &&
      typeof obj[key] === 'object' &&
      !Array.isArray(obj[key])
    ) {
      var n = flattenObj(obj[key], nestA.concat(key))
      Object.keys(n).forEach((k) => {
        res[k] = n[k]
      })
    } else {
      res[a2p(nestA.concat(key))] = obj[key]
    }
    return res
  }, {})
}

export default nAry(1, flattenObj)
