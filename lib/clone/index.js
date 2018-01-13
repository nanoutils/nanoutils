var __ = require('../__')

module.exports = function clone(src) {
  if (src === __) return __

  if (!src || typeof src !== 'object' || typeof src === 'function') {
    return src
  }

  if (src.nodeType && 'cloneNode' in src) {
    return src.cloneNode(true)
  }

  if (src instanceof Date) {
    return new Date(src.getTime())
  }

  if (src instanceof RegExp) {
    return new RegExp(src)
  }

  if (Array.isArray(src)) {
    return src.map(clone)
  }

  if (src instanceof Object) {
    var obj = {}
    for (var key in src) {
      obj[key] = clone(src[key])
    }
    return obj
  }

  return src
}
