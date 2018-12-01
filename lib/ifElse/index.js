import curry3 from '../_internal/_curry3'

export default curry3(function ifElse(predicate, thenFunction, elseFunction) {
  return function(value) {
    return predicate(value)
      ? thenFunction(value)
      : elseFunction(value)
  }
})
