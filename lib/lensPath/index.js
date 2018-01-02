var lens = require('../lens')
var toPath = require('../../utils/toPath')

module.exports = function lensPath(k) {
  var p = toPath(k)
  return lens(
    function propGetter(obj) {
      return p.reduce(function(val, k) {
        return val !== null && val !== undefined ? val[k] : undefined
      }, obj)
    },
    function propSetter(val, obj) {
      if (typeof obj !== 'object') return obj
      var last = p.slice(0, -1).reduce(function(nested, k) {
        if (typeof nested[k] !== 'object') {
          nested[k] = {}
        }
        return nested[k]
      }, obj)
      last[p[p.length - 1]] = val
      return obj
    }
  )
}
