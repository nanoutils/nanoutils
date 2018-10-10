import toArray from '../toArray'

export default function composeT() {
  var transducers = toArray(arguments)
  return transducers
    .reduceRight(function(outerTransducer, innerTransducer) {
      return function() {
        return outerTransducer(innerTransducer.apply(null, arguments))
      }
    }, function(x) {
      return x
    })
}
