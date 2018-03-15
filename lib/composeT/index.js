import toArray from '../toArray'

export default function composeT() {
  var args = arguments
  return toArray(args)
    .reduceRight(function(acc, f) {
      return function() {
        return acc(f.apply(f, arguments))
      }
    }, function(x) {
      return x
    })
}
