const {
  generators: { getSameLengthArrays },
  time: { TIME_1M },
  types: { TYPE_1M }
} = require('../_internal/helpers/performance')

module.exports = function() {
  const [big1, big2, big3] = getSameLengthArrays(TIME_1M)
  const insertion = [-1, -2, -3, -4, -5]

  return {
    type: TYPE_1M,
    argss: [
      [insertion.length / 2, big1, insertion],
      [insertion.length / 2, big2, insertion],
      [insertion.length / 2, big3, insertion]
    ]
  }
}
