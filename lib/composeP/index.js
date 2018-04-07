export default function composeP() {
  return [].slice.call(arguments, 1)
    .reduceRight(function(a, b) {
      return function() {
        return a.apply(a, arguments).then(function(res) {
          return b(res)
        })
      }
    }, arguments[0])
}
