import curryN from '../curryN'
import toArray from '../toArray'

export default curryN(2, function fill(val, start, end, arr) {
  var last = arr || end !== undefined ? end : start
  return toArray(last).fill(
    val,
    end !== undefined ? start : 0,
    arr !== undefined ? end : last.length
  )
})
