import curry2 from '../_internal/_curry2'

export default curry2(function times(cb, idx) {
  return idx === 0 ? [] : times(cb, idx - 1).concat([cb(idx - 1)])
})
