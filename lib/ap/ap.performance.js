const { generators: { getArrays }, times: { TIMES_100 }, types: { TYPE_100 } } = require('../_internal/helpers/performance')

module.exports = function() {
  // 1h * 1h = 10k iterations
  const [smallF, mediumF, bigF] = getArrays(TIMES_100, x => () => x + 1)
  const [smallV, mediumV, bigV] = getArrays(TIMES_100, x => x)

  return {
    type: TYPE_100,
    argss: [
      [smallF, smallV],
      [mediumF, mediumV],
      [bigF, bigV]
    ]
  }
}
