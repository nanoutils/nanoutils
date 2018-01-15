import lens from '../lens'
import a2p from '../a2p'

export default function lensPath(k) {
  var p = a2p(k)
  return lens(
    function propGetter(obj) {
      return p.reduce(function(val, k) {
        return val !== null && val !== undefined ? val[k] : undefined
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
      last[p[p.length - 1]] = val
      return obj
    }
  )
}
