import curry3 from '../_internal/_curry3'

export default curry3(
  (cond, a, b) => (value) => cond(value) ? a(value) : b(value),
)
