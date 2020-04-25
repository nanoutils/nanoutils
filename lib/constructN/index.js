import curryN from '../curryN/curryN'

export default curryN(2, (n, cb) =>
  curryN(n, (...args) => new (Function.prototype.bind.apply(
    cb,
    [null, ...args]
  ))()
  )
)
