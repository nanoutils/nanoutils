const { getRandomNumberArrays } = require('../_internal/helpers/performance')

module.exports = function() {
  const { type, argss } = getRandomNumberArrays()
  return {
    type,
    // concats big to []
    argss: argss.map(([ big ]) => [ [], big ])
  }
}
