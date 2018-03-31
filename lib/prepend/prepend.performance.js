module.exports = function() {
  var list1 = []
  var list2 = []
  var list3 = []
  var length = 1000000

  for (var i = 0; i < length; i++) {
    if (i < length / 100) list1.push('a')
    if (i < length / 10) list2.push('a')
    list3.push('a')
  }

  var sets = [
    ['a', list1],
    ['a', list2],
    ['a', list3]
  ]

  return {
    argss: sets,
    type: '1e4_1e5_1e6'
  }
}
