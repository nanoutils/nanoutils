import curry2 from '../_internal/_curry2'

export default curry2((comparator, array) => array.slice().sort(comparator))
