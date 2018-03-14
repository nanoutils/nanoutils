function reduceIterable(cb, acc, gen) {
  var step = gen.next()
  while (!step.done) {
    acc = cb(acc, step.value)
    step = gen.next()
  }
  return acc
}

export default function _reduce(cb, initial, iterable) {
  return Array.isArray(iterable)
    ? [].slice.call(iterable).reduce(cb, initial)
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
