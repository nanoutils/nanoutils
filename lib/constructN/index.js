import curryN from '../curryN/curryN'

export default curryN(2, function construct(n, cb) {
  return curryN(n, (...args) => new (Function.prototype.bind.apply(
    cb,
    [null, ...args]
  ))()
  )
})
