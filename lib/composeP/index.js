import toArray from '../toArray'

export default function composeP() {
  var promises = toArray(arguments)
  return function(value) {
    return promises.reduceRight(function(promiseOuter, promiseInner) {
      return promiseOuter.then(promiseInner)
    }, Promise.resolve(value))
  }
}
