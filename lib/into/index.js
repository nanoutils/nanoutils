import _curry3 from '../_internal/_curry3'
import _curry2 from '../_internal/_curry2'
import transduce from '../transduce'

export default _curry3(function into(to, transducer, from) {
  if (Array.isArray(to)) {
    return transduce(transducer, _curry2(function pushReducer(arr, v) {
      arr.push(v)
      return arr
    }), to, from)
  }
})
