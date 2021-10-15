const {
  generators: { getArrays },
  times: { TIMES_1M },
  types: { TYPE_1M },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const [small, medium, big] = getArrays(TIMES_1M)
  const num = 3

  return {
    type: TYPE_1M,
    argss: [
      [num, small],
      [num, medium],
      [num, big],
    ],
  }
}
