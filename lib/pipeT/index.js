import toArray from '../toArray'

export default function pipeT() {
  var args = arguments
  return toArray(args)
    .reduce(function(acc, f) {
      return function() {
        return acc(f.apply(f, arguments))
      }
    }, function(x) {
      return x
    })
}
