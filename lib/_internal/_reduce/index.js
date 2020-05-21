const reduceIterable = (cb, acc, gen) => {
  var step = gen.next()
  while (!step.done) {
    acc = cb(acc, step.value)
    step = gen.next()
  }
  return acc
}

const arrayReduce = (cb, initial, array) => {
  var length = array.length
  var result = initial
  for (var i = 0; i < length; i++) {
    result = cb(result, array[i], i, array)
  }
  return result
}

export default (cb, initial, iterable) => {
  if (Array.isArray(iterable)) {
    return arrayReduce(cb, initial, [].slice.call(iterable))
  }
  if (iterable.reduce) {
    return iterable.reduce(cb, initial)
  }
  if (iterable.next) {
    return reduceIterable(cb, initial, iterable)
  }
  if (typeof Symbol !== 'undefined' && iterable[Symbol.iterator]) {
    return reduceIterable(cb, initial, iterable[Symbol.iterator]())
  }
  if (process.env.NODE_ENV !== 'production') {
    throw new TypeError('Argument should be iterable')
  }
}
