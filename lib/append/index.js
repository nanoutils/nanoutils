import curry2 from '../_internal/_curry2'

export default curry2(function append(v, arr) {
  return arr.concat([v])
})
