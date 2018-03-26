import toArray from '../toArray'

export default function compose() {
  var args = arguments
  return function(initVal) {
    return toArray(args)
      .reduceRight(function(val, cb) {
        return cb(val)
      }, initVal)
  }
}
