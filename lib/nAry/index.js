import nul from '../_internal/_nul'

export default function nAry(n, fn) {
  return nul(
    function() {
      return fn.apply(fn, [].slice.call(arguments, 0, n))
    },
    n
  )
}
