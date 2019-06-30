import __ from '../../__'
import nul from '../_nul'

export default function curry3(fn, oldArgs) {
  oldArgs = oldArgs || []
  var placeholdersLen = oldArgs.reduce((count, arg) => count + (arg === __), 3)
  if (oldArgs.length >= placeholdersLen) {
    return fn(...oldArgs)
  }
  return nul(
    (...newArgs) => curry3(
      fn,
      oldArgs
        .reduce((_next, a) => _next.concat([a !== __ ? a : newArgs.shift() || __]), [])
        .concat(newArgs)
    ),
    placeholdersLen - oldArgs.length
  )
}
