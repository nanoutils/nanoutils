const { times: { TIME_1K }, types: { TYPE_1K }, generateArrays } = require('../_internal/helpers/performance')

var rollUp = function(arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr = [arr[i], newArr]
  }
  return newArr
}

module.exports = function() {
  const [small, medium, big] = generateArrays(TIME_1K, i => i).map(rollUp)

  return {
    type: TYPE_1K,
    argss: [
      [small],
      [medium],
      [big]
    ]
  }
}
