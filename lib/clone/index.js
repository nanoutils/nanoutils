import __ from '../__'

function baseClone(src, circulars, clones) {
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
    circulars.push(src)
    var obj = Object.create(src)
    clones.push(obj)
    for (var key in src) {
      var idx = circulars.findIndex(function(i) {
        return i === src[key]
      })
      obj[key] = idx > -1 ? clones[idx] : baseClone(src[key], circulars, clones)
    }
    return obj
  }

  return src
}

export default function clone(src) {
  return baseClone(src, [], [])
}
