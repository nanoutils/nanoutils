const {
  times: { TIMES_1M },
  types: { TYPE_1M },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const [time1, time2, time3] = TIMES_1M
  const value = 1

  return {
    type: TYPE_1M,
    argss: [
      [value, time1],
      [value, time2],
      [value, time3],
    ],
  }
}
