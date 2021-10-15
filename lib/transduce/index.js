import _reduce from '../_internal/_reduce'

export default (transducer, reducer, initial, iterable) =>
  _reduce(transducer(reducer), initial, iterable)
