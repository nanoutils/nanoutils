import curry2 from '../_internal/_curry2'

export default curry2(function range(from, to) {
  return Array(Math.ceil(to - from)).fill(null).map((val, idx) => from + idx)
})
