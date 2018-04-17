import _set from '../_internal/_set'
import equals from '../equals/equals'

export default function uniq(arr) {
  return _set(arr, equals).values()
}
