import _curry2 from '../_internal/_curry2'
import _set from '../_internal/_set'
import equals from '../equals/equals'

export default _curry2(function uniqBy(func, list) {
  var set = _set([], equals)
  for (var i = 0; i < list.length; i++) set.add(func(list[i]))
  return set.values()
})
