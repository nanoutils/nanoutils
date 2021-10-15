import curry2 from '../_internal/_curry2'

export default curry2((constructor, val) =>
  val != null ? val.constructor === constructor : val === constructor,
)
