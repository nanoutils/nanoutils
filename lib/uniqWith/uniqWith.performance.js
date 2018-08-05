const { generators: { getArrays }, times: { TIMES_10K }, types: { TYPE_10K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const generateValue = (x) => (
    x % 2 === 0
      ? (x - 1) + ''
      : x
  )
  const [small, medium, big] = getArrays(TIMES_10K, generateValue)
  const compare = (a, b) => a + '' === b + ''

  return {
    argss: [[compare, small], [compare, medium], [compare, big]],
    type: TYPE_10K
  }
}
