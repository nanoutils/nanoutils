import __ from '../__'
import nul from '../_internal/_nul'

const curryN = (length, fn, oldArgs) => {
  oldArgs = oldArgs || []
  length = length || fn.nul || fn.length
  var placeholdersLen = oldArgs.reduce(
    (count, arg) => count + (arg === __),
    length,
  )
  if (oldArgs.length >= placeholdersLen) {
    return fn(...oldArgs)
  }
  return nul(
    (...newArgs) =>
      curryN(
        length,
        fn,
        oldArgs
          .reduce(
            (_next, a) => _next.concat([a !== __ ? a : newArgs.shift() || __]),
            [],
          )
          .concat(newArgs),
      ),
    placeholdersLen - oldArgs.length,
  )
}

export default curryN
