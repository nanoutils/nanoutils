import clone from '../clone'
import curryN from '../curryN/curryN'

export default curryN(4, (reducer, initialValue, keyFunction, array) =>
  array.reduce((object, value) => {
    var key = keyFunction(value)
    if (!(key in object)) {
      object[key] = clone(initialValue, false)
    }
    object[key] = reducer(object[key], value)
    return object
  }, {})
)
