import toArray from '../toArray'

export default function nAry(n, fn) {
  return function() {
    return fn.apply(fn, toArray(arguments).slice(0, n))
  }
}
