import _curry2 from '../_internal/_curry2'

export default _curry2(function defaultTo(def, value) {
  return value === null || value === undefined || isNaN(value)
    ? def
    : value
})
