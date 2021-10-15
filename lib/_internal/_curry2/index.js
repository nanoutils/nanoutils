import __ from '../../__'
import nul from '../_nul'

const curry2 = (fn, oldArgs) => {
  oldArgs = oldArgs || []
  var placeholdersLen = oldArgs.reduce((count, arg) => count + (arg === __), 2)
  if (oldArgs.length >= placeholdersLen) {
    return fn(...oldArgs)
  }
  return nul(
    (...newArgs) =>
      curry2(
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

export default curry2
