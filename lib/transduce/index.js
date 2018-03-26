import _reduce from '../_internal/_reduce'

export default function transduce(transducer, reducer, initial, iterable) {
  return _reduce(
    transducer(reducer),
    initial,
    iterable
  )
}
