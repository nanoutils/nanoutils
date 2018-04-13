var map
try {
  map = Map
} catch (_) { }

var set
try {
  set = Set
} catch (_) { }

export default function equals(a, b, circulars) {
  var circ = (circulars || []).concat([a, b])
  if (a === b) return true
  if (a == null || b == null) return a === b
  var typeA = typeof a
  var typeB = typeof b
  if (typeA !== typeB) return false
  if (a instanceof Date) {
    return a.getTime() === b.getTime()
  }
  if (a instanceof RegExp) {
    return a.toString() === b.toString()
  }
  if (set && a instanceof set) {
    return equals(a.values(), b.values(), circ)
  }
  if (map && a instanceof map) {
    return equals(a.entries(), b.entries(), circ)
  }
  if (typeA === 'object' && typeB === 'object') {
    var keys = Object.keys(a)
    if (keys.length !== Object.keys(b).length) return false
    for (var i = 0; i < keys.length; i++) {
      var circCompare = false
      for (var k = 0; k < circ.length; k++) {
        if (circ[k] === a[keys[i]]) {
          circCompare = true
          break
        }
      }
      if (circCompare) {
        if (a[keys[i]] !== b[keys[i]]) return false
      } else if (!equals(a[keys[i]], b[keys[i]], circ)) return false
    }
    return true
  }
  return false
}
