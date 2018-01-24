import curryN from '../curryN'

export default curryN(4, function fill(arr, value, start, end) {
  return Array.isArray(arr)
    ?
    value
      ?
      arr.fill(value, start, end)
      :
      arr
    :
    []
})
