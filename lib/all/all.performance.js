const { generateArrays, times: { TIME_1M } } = require('../_internal/helpers/performance')

module.exports = function() {
  var length = TIME_1M[2] / 2
  const [arr1] = generateArrays([length, length, length], x => 0)
  const [arr2] = generateArrays([length, length, length], x => 1)
  const func = x => x === 1

  return {
    type: 'start_half_end',
    argss: [
      [func, arr1.concat(arr1)], // 0 passes
      [func, arr1.concat(arr2)], // half passes
      [func, arr2.concat(arr2)] // all passes
    ]
  }
}
