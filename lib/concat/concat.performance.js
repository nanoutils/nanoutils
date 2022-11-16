const {
  generators: { getArrays },
  time: { TIME_100K, TIME_1M },
  times: { TIMES_1M },
  types: { TYPE_1M },
  utils: { getRandom },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const [big1, big2, big3] = getArrays(TIMES_1M, () =>
    getRandom(TIME_100K, TIME_1M),
  )

  return {
    type: TYPE_1M,
    argss: [
      [[], big1],
      [[], big2],
      [[], big3],
    ],
  }
}
