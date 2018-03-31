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
    [list1.length / 2, 'b', list1],
    [list2.length / 2, 'b', list2],
    [list3.length / 2, 'b', list3]
  ]

  return {
    argss: sets,
    type: '1e4_1e5_1e6'
  }
}
