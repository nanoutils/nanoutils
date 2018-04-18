import _curry2more from '../_internal/_curry2more'

function lift(f) {
  var args = [].slice.call(arguments, 1)
  var lens = args.map(function(arg) { return arg.length })
  var indices = function(index) {
    var result = Array(args.length)
    var i = index
    var j = lens.length - 1
    var k = j
    while (i > 0) {
      // module (i - lens[j] * div)
      result[k] = i % lens[j]
      // div
      i = Math.floor(i / lens[j])
      j--
      k--
    }
    while (k >= 0) {
      result[k--] = 0
    }
    return result
  }
  var length = lens.reduce(function(a, b) { return a * b }, 1)
  var answer = Array(length)
  for (var i = 0; i < length; i++) {
    var is = indices(i)
    answer[i] = f.apply(f, args.map(function(arr, j) {
      return arr[is[j]]
    }))
  }
  return answer
}

export default _curry2more(lift)
