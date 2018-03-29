module.exports = function() {
  var list = []
  var length = 1000000

  for (var i = 0; i < length; i++) {
    list.push('a')
  }

  var sets = [
    [[list[0]].join(''), list.join('')],
    [list.slice(0, list.length / 2).join(''), list.join('')],
    [list.join(''), list.join('')]
  ]

  return {
    argss: sets,
    type: 'start_half_end'
  }
}
