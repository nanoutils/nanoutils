import toArray from '../toArray'

export default function nAry(n, fn) {
  var arried = function() {
    return fn.apply(fn, toArray(arguments).slice(0, n))
  }
  arried.nanoLen = n
  return arried
}
