import curry2 from '../_internal/_curry2'

export default curry2((from, to) =>
  Array(Math.ceil(to - from))
    .fill(null)
    .map((val, idx) => from + idx),
)
