import curryN from '../curryN/curryN'
import toArray from '../toArray'

export default curryN(2, function constructN(size, callback) {
  return curryN(size, function() {
    return new (Function.prototype.bind.apply(
      callback,
      [null].concat(toArray(arguments))
    ))()
  })
})
