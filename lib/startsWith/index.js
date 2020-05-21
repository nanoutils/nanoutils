import curry2 from '../_internal/_curry2'

export default curry2((value, list) => {
  if (typeof value !== typeof list) return false
  if (Array.isArray(value)) {
    if (value.length > list.length) return false
    if (value === list) return true
    var length = value.length
    for (var i = 0; i < length; i++) if (value[i] !== list[i]) return false
    return true
  }
  return value === list.slice(0, value.length)
})
