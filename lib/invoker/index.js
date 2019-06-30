import curryN from '../curryN/curryN'

export default function invoker(arity, methodName) {
  return curryN(arity + 1, (...args) => {
    var obj = args.slice(-1)[0]
    return obj[methodName].apply(obj, args.slice(0, -1))
  })
}
