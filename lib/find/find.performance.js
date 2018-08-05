module.exports = function() {
  var length = 2000000
  var half = length / 4 - 1
  var big1 = []
  var big2 = []
  var big3 = []
  var func = x => x % 2 === 0

  for (var i = 1; i < length; i += 2) {
    if (i === 1) big1.push(2)
    big1.push(i)

    big2.push(i)
    if (i === half) big2.push(2)

    big3.push(i)
    if (i === length - 1) big3.push(2)
  }

  return {
    type: 'start_half_end',
    argss: [
      [func, big1],
      [func, big2],
      [func, big3]
    ]
  }
}
