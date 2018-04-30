const { generateArrays, times: { TIME_1H }, types: { TYPE_1H } } = require('../_internal/helpers/performance')

module.exports = function() {
  // 1h * 1h = 10k iterations
  const [smallF, mediumF, bigF] = generateArrays(TIME_1H, () => x => x + 1)
  const [smallV, mediumV, bigV] = generateArrays(TIME_1H, x => x)

  return {
    type: TYPE_1H,
    argss: [
      [smallF, smallV],
      [mediumF, mediumV],
      [bigF, bigV]
    ]
  }
}
