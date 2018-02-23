import curry2 from '../_internal/_curry2'

export default curry2(function sortBy(comparator, array) {
  return array.slice().sort(comparator)
})