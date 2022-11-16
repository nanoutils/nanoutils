import _reduceRight from '../_internal/_reduceRight'

export default (transducer, reducer, initial, iterable) =>
  _reduceRight(transducer(reducer), initial, iterable)
