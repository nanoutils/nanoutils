import toArray from '../toArray'

export default function composeP() {
  var promises = toArray(arguments)
  return function(initVal) {
    return promises.reduceRight(
      function(a, b) {
        return a.then(b)
      },
      Promise.resolve(initVal)
    )
  }
}
