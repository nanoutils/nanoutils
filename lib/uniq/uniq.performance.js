const { generateArrays, times: { TIME_10K }, types: { TYPE_10K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, big] = generateArrays(TIME_10K, x => x % 2 === 0 ? 'a' : x)
  return {
    type: TYPE_10K,
    argss: [
      [small],
      [medium],
      [big]
    ]
  }
}
