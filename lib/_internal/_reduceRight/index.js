function arrayReduceRight(cb, initial, array) {
  var length = array.length
  var result = initial
  for (var i = length - 1; i >= 0; i--) {
    result = cb(result, array[i], i, array)
  }
  return result
}

export default function _reduceRight(cb, initial, iterable) {
  if (Array.isArray(iterable)) {
    return arrayReduceRight(cb, initial, iterable.slice())
  }
  if (iterable.reduceRight) {
    return iterable.reduceRight(cb, initial)
  }
  if (process.env.NODE_ENV !== 'production') {
    throw new TypeError('Argument should be right iterable')
  }
}
