import curry2 from '../_internal/_curry2'
import set from '../_internal/_set'
import equals from '../equals/equals'

export default curry2(function uniqBy(func, list) {
  var hashSet = set([], equals)
  for (var i = 0; i < list.length; i++) {
    hashSet.add(func(list[i]))
  }
  return hashSet.values()
})
