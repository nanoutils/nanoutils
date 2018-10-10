import toArray from '../toArray'

export default function compose() {
  var functions = toArray(arguments)
  return function(value) {
    return functions.reduceRight(function(parameter, callback) {
      return callback(parameter)
    }, value)
  }
}
