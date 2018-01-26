import __ from '../../__'
import toArray from '../../toArray'

export default function placehold(fn, length, oldArgs) {
  oldArgs = oldArgs || []
  length = length || fn.length
  var placeholdersLen = oldArgs.reduce(function(count, arg) {
    return count + (arg === __)
  }, 0)
  return oldArgs.length - placeholdersLen >= length
    ? fn.apply(fn, oldArgs)
    : function() {
        var newArgs = toArray(arguments)
        return placehold(
          fn,
          length,
          oldArgs
            .reduce(function(_next, a) {
              _next.push(a !== __ ? a : newArgs.length ? newArgs.shift() : __)
              return _next
            }, [])
            .concat(newArgs)
        )
      }
}
