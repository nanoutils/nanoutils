import _set from '../_internal/_set'
import equals from '../equals/equals'

export default (arr) => _set(arr, equals).values()
