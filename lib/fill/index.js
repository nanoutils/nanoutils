import curryN from '../curryN'
import toArray from '../toArray'

export default curryN(2, function fill(val, start, end, arr) {
  var last = arguments[arguments.length - 1]
  return Array.isArray(last)
    ? val
      ? toArray(last).fill(val, Array.isArray(start) ? undefined : start, Array.isArray(end) ? undefined : end)
      : last
    : function(arrC) {
        return fill(val, start, end, arrC)
      }
})
