const {
  times: { TIMES_1M },
  types: { TYPE_1M }
} = require('../_internal/helpers/performance')

module.exports = function() {
  const [time1, time2, time3] = TIMES_1M
  const f = time => value => value > time ? false : [value, value + 1]
  const start = 0

  return {
    type: TYPE_1M,
    argss: [
      [f(time1), start],
      [f(time2), start],
      [f(time3), start]
    ]
  }
}
