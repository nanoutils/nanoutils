function reduceIterable(cb, acc, gen) {
  var step = gen.next()
  while (!step.done) {
    acc = cb(acc, step.value)
    step = gen.next()
  }
  return acc
}

function arrayReduce(cb, initial, array) {
  var length = array.length
  var result = initial
  for (var i = 0; i < length; i++) {
    result = cb(result, array[i], i, array)
  }
  return result
}

export default function _reduce(cb, initial, iterable) {
  return Array.isArray(iterable)
    ? arrayReduce(cb, initial, [].slice.call(iterable))
    : iterable.reduce
      ? iterable.reduce(cb, initial)
      : iterable.next
        ? reduceIterable(cb, initial, iterable)
        : typeof Symbol !== 'undefined' && iterable[Symbol.iterator]
          ? reduceIterable(cb, initial, iterable[Symbol.iterator]())
          : (function() {
            throw new TypeError('List should be iterable')
          })()
}
