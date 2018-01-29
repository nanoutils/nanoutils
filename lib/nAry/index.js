import toArray from '../toArray'

export default function nAry(n, fn) {
  return Object.defineProperty(
    function() {
      return fn.apply(fn, toArray(arguments).slice(0, n))
    },
    'nanoLen',
    {
      writable: false,
      value: n
    }
  )
}
