const { generateArrays, times: { TIME_10K }, types: { TYPE_10K } } = require('../_internal/helpers/performance')

module.exports = function() {
  var f = (x, y) => x === y
  const [big1, big2, big3] = generateArrays(TIME_10K, i => i)

  return {
    type: TYPE_10K,
    argss: [
      [f, big1, big1],
      [f, big2, big2],
      [f, big3, big3]
    ]
  }
}
