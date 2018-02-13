import p2a from '../_internal/_p2a'
import lens from '../lens'

export default function lensPath(k) {
  var p = p2a(k)
  return lens(
    function propGetter(obj) {
      return p.reduce(function(val, k) {
        return val != null ? val[k] : undefined
      }, obj)
    },
    function propSetter(val, obj) {
      if (typeof obj !== 'object') return obj
      var last = p.slice(0, -1).reduce(function(nested, k, idx) {
        if (typeof nested[k] !== 'object') {
          nested[k] = Number.isNaN(parseInt(p[idx + 1])) ? {} : []
        }
        return nested[k]
      }, obj)
      last[p.slice(-1)[0]] = val
      return obj
    }
  )
}
