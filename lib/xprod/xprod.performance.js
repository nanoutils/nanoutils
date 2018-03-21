module.exports = function() {
  var list1 = []
  var list2 = []
  var list3 = []
  var length = 1000

  for (var i = 0; i < length; i++) {
    if (i <= length / 100) list1.push('a')
    if (i < length / 10) list2.push('a')
    list3.push('a')
  }

  var sets = [
    [list1, list1], // short
    [list2, list2], // middle
    [list3, list3] // long
  ]

  return {
    argss: sets,
    type: 'array_size_1e3'
  }
}
