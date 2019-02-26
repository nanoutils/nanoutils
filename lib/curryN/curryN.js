import __ from '../__'
import nul from '../_internal/_nul'

export default function curryN(length, fn, oldArgs) {
  oldArgs = oldArgs || []
  length = length || fn.nul || fn.length
  var placeholdersLen = oldArgs.reduce(function(count, arg) {
    return count + (arg === __)
  }, length)
  if (oldArgs.length >= placeholdersLen) {
    return fn.apply(fn, oldArgs)
  }
  return nul(
    function() {
      var newArgs = [].slice.call(arguments)
      return curryN(
        length,
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
