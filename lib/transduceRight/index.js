import _reduceRight from '../_internal/_reduceRight'

export default function transduceRight(transducer, reducer, initial, iterable) {
  return _reduceRight(
    transducer(reducer),
    initial,
    iterable
  )
}
