import clone from '../clone'
import curryN from '../curryN/curryN'

export default curryN(4, function reduceBy(reducer, initialValue, keyFunction, array) {
  return array.reduce(function(object, value) {
    var key = keyFunction(value)
    if (!(key in object)) {
      object[key] = clone(initialValue)
    }
    object[key] = reducer(object[key], value)
    return object
  }, {})
})
