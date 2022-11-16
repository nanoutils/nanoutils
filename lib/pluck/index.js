import curry2 from '../_internal/_curry2'

export default curry2((property, array) =>
  array.map((value) => value[property]),
)
