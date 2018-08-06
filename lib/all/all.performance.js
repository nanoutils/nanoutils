const { generators: { getSameLengthArrays }, time: { TIME_1M }, types: { TYPE_SHE } } = require('../_internal/helpers/performance')

module.exports = function() {
  const [arr1, arr2] = getSameLengthArrays(TIME_1M / 2, () => [0, 1])
  const isOne = x => x === 1

  return {
    type: TYPE_SHE,
    argss: [
      [isOne, [ ...arr1, ...arr1 ]], // 0 passes
      [isOne, [ ...arr1, ...arr2 ]], // half passes
      [isOne, [ ...arr2, ...arr2 ]] // all passes
    ]
  }
}
