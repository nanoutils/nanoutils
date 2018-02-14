import curry2 from '../_internal/_curry2'

export default curry2(function repeat(val, idx) {
  return idx === 0 ? [] : [val].concat(repeat(val, idx - 1))
})
