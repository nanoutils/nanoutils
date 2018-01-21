import toArray from '../toArray'

export default function pipe() {
  var args = arguments
  return function(initVal) {
    return toArray(args)
      .reduceRight(function(val, cb) {
        return cb(val)
      }, initVal)
  }
}
