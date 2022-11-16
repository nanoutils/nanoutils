import __ from '../__'
import indexOf from '../indexOf/indexOf'

const cloneRegExp = (pattern) => {
  var flags = ''
  if (pattern.global) {
    flags += 'g'
  }
  if (pattern.ignoreCase) {
    flags += 'i'
  }
  if (pattern.multiline) {
    flags += 'm'
  }
  if (pattern.sticky) {
    flags += 'y'
  }
  if (pattern.unicode) {
    flags += 'u'
  }
  return new RegExp(pattern.source, flags)
}

const baseClone = (src, circulars, clones, deep, clone) => {
  if (src === __) return __

  if (!src || typeof src !== 'object' || typeof src === 'function') {
    return src
  }

  if (src.nodeType && 'cloneNode' in src) {
    return src.cloneNode(deep)
  }

  if (src instanceof Date) {
    return new Date(src.getTime())
  }

  if (src instanceof RegExp) {
    return cloneRegExp(src)
  }

  if (Array.isArray(src)) {
    return src.map((value) => (deep ? clone(value, true) : value))
  }

  if (src instanceof Object) {
    circulars.push(src)
    var obj = Object.create(src)
    clones.push(obj)
    for (var key in src) {
      if (deep) {
        var idx = indexOf(src[key], circulars)
        if (idx > -1) {
          obj[key] = clones[idx]
        } else {
          obj[key] = baseClone(src[key], circulars, clones, deep, clone)
        }
      } else {
        obj[key] = src[key]
      }
    }
    return obj
  }

  return src
}

const clone = (src, deep) => {
  deep = typeof deep === 'boolean' ? deep : true
  return baseClone(src, [], [], deep, clone)
}

export default clone
