import _curry2 from '../_internal/_curry2'

export default _curry2(function startsWith(value, list) {
  return Array.isArray(list)
    ? Array.isArray(value) && value[0] === list[0]
    : value === list.slice(0, value.length)
})
