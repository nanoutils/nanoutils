import _reduce from '../_internal/_reduce'

export default function transduce(transducer, reducer, initial, iterable) {
  var newReducer = transducer(reducer)
  return _reduce(
    newReducer,
    initial,
    iterable
  )
}
