export default function nAry(n, fn) {
  return Object.defineProperty(
    function() {
      return fn.apply(fn, [].slice.call(arguments, 0, n))
    },
    'nanoLen',
    {
      writable: false,
      value: n
    }
  )
}
