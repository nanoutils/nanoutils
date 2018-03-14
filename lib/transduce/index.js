import _reduce from '../_internal/_reduce'

// TODO: replace with productive one
// 1) should carry out one cycle which is not true here
//    - transducer(iterable) may slow down the tranducer approach
export default function transduce(transducer, reducer, initial, iterable) {
  return _reduce(
    function(acc, v) {
      return reducer(acc, v)
    },
    initial,
    transducer(iterable)
  )
}
