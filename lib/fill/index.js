import curry from '../curry'

export default curry(function fill(arr, value, start, end) {
  return Array.isArray(arr) ?
    value ?
      arr.fill(value, start, end)
      :
      arr
    :
    []
})
