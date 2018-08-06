const {
  generators: { getArrays },
  time: { TIME_10K, TIME_100K, TIME_1M },
  types: { TYPE_1M },
  utils: { triple }
} = require('../_internal/helpers/performance')

module.exports = function() {
  const sLength = triple(TIME_10K)
  const mLength = triple(TIME_100K)
  const lLength = triple(TIME_1M)

  const genFunc = length => x => x < length / 2 ? 1 : 2

  const [small] = getArrays(sLength, genFunc(TIME_10K))
  const [medium] = getArrays(mLength, genFunc(TIME_100K))
  const [big] = getArrays(lLength, genFunc(TIME_1M))

  return {
    type: TYPE_1M,
    argss: [
      [small],
      [medium],
      [big]
    ]
  }
}
