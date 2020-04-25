import curry2 from '../_internal/_curry2'
import set from '../_internal/_set'

export default curry2((arr1, arr2) => set(arr1).concat(arr2).values())
