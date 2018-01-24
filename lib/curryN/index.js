import nAry from '../nAry'
import placehold from '../placehold'

function curryN(n, fn) {
  var f = function() {
    return n - arguments.length > 0
      ? curryN(n - arguments.length, fn.bind.apply(fn, [fn].concat(arguments)))
      : fn.apply(fn, arguments)
  }
  f.nanoLen = n
  return placehold(f)
}

export default curryN(2, curryN)
