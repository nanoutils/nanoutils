const { types: { TYPE_PERCENT } } = require('../_internal/helpers/performance')

module.exports = function() {
  var length = 1000
  var list1 = []
  var list2 = []
  var list3 = []

  for (var i = 0; i < length; i++) {
    list1.push('a' + i)
    if (i < length / 2) list2.push('a' + i)
    else list2.push('aa' + i)
    list3.push('aaa' + i)
  }

  return {
    type: TYPE_PERCENT,
    argss: [
      [list1, list3], // no common
      [list1, list2], // 50% of common
      [list1, list1] // 100% of common
    ]
  }
}
