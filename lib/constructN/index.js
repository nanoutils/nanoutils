import curryN from '../curryN/curryN'
import toArray from '../toArray'

export default curryN(2, function construct(n, cb) {
  return curryN(n, function() {
    return new (Function.prototype.bind.apply(
      cb,
      [null].concat(toArray(arguments))
    ))()
  })
})
