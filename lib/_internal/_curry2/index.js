import __ from '../../__'
import nul from '../_nul'

export default function curry2(fn, oldArgs) {
  oldArgs = oldArgs || []
  var placeholdersLen = oldArgs.reduce(function(count, arg) {
    return count + (arg === __)
  }, 2)
  if (oldArgs.length >= placeholdersLen) {
    return fn.apply(fn, oldArgs)
  }
  return nul(
    function() {
      var newArgs = [].slice.call(arguments)
      return curry2(
        fn,
        oldArgs
          .reduce(function(_next, a) {
            return _next.concat([a !== __ ? a : newArgs.shift() || __])
          }, [])
          .concat(newArgs)
      )
    },
    placeholdersLen - oldArgs.length
  )
}
