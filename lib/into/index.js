import curry3 from '../_internal/_curry3'
import transduce from '../transduce'

// TODO: need to add implementation for other structures
export default curry3(function into(to, transducer, from) {
  if (Array.isArray(to)) {
    return transduce(transducer, function pushReducer(arr, v) {
      arr.push(v)
      return arr
    }, to, from)
  }
})
