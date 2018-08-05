const { generators: { getArrays }, times: { TIMES_1M }, types: { TYPE_1M } } = require('../_internal/helpers/performance')

module.exports = function() {
  const sLength = [TIMES_1M[0], TIMES_1M[0], TIMES_1M[0]]
  const mLength = [TIMES_1M[1], TIMES_1M[1], TIMES_1M[1]]
  const lLength = [TIMES_1M[2], TIMES_1M[2], TIMES_1M[2]]

  const genFunc = length => x => x < length / 2 ? 1 : 2

  const [small] = getArrays(sLength, genFunc(sLength[0]))
  const [medium] = getArrays(mLength, genFunc(mLength[0]))
  const [big] = getArrays(lLength, genFunc(lLength[0]))

  return {
    type: TYPE_1M,
    argss: [
      [small],
      [medium],
      [big]
    ]
  }
}
