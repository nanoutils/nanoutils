export function indices(index, length, lens) {
  var result = Array(length).fill(0)
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
  return result
}

export function lift(f) {
  var args = [].slice.call(arguments, 1)
  var lens = args.map(arg => arg.length)
  var length = lens.reduce((a, b) => a * b, 1)
  var answer = Array(length)
  for (var i = 0; i < length; i++) {
    var is = indices(i, args.length, lens)
    answer[i] = f.apply(f, args.map((arr, j) => arr[is[j]]))
  }
  return answer
}
