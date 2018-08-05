const { generators: { getArrays }, times: { TIMES_10K }, types: { TYPE_10K } } = require('../_internal/helpers/performance')

module.exports = function() {
  var isEqual = (x, y) => x === y
  const [big1, big2, big3] = getArrays(TIMES_10K, i => i)

  return {
    type: TYPE_10K,
    argss: [
      [isEqual, big1, big1],
      [isEqual, big2, big2],
      [isEqual, big3, big3]
    ]
  }
}
