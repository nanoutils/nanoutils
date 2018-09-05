const {
  generators: { getSameLengthArrays },
  time: { TIME_1M },
  types: { TYPE_SHE }
} = require('../_internal/helpers/performance')

module.exports = function() {
  const [big1, big2, big3] = getSameLengthArrays(TIME_1M)
  const insertion = -1

  return {
    type: TYPE_SHE,
    argss: [
      [0, insertion, big1],
      [TIME_1M / 2, insertion, big2],
      [TIME_1M - 1, insertion, big3]
    ]
  }
}
