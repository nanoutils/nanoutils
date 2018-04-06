import curryN from '../curryN/curryN'
import toArray from '../toArray'

export default function invoker(arity, methodName) {
  return curryN(arity + 1, function() {
    var args = toArray(arguments)
    var obj = args.slice(-1)[0]
    return obj[methodName].apply(obj, args.slice(0, -1))
  })
}
