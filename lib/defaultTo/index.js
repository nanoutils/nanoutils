import curry2 from '../_internal/_curry2'

export default curry2((def, value) =>
  value == null || isNaN(value)
    ? def
    : value
)
