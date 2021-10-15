const {
  generators: { getSameLengthArrays },
  time: { TIME_1K, TIME_10K, TIME_100K },
  types: { TYPE_100K },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const smalls = getSameLengthArrays(TIME_1K)
  const mediums = getSameLengthArrays(TIME_10K)
  const bigs = getSameLengthArrays(TIME_100K)

  return {
    type: TYPE_100K,
    argss: [[smalls], [mediums], [bigs]],
  }
}
