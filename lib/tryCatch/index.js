import _curry2 from '../_internal/_curry2'

export default _curry2(function tryCatch(trier, catcher) {
  return function() {
    try {
      return trier.apply(trier, arguments)
    } catch (err) {
      return catcher.apply(catcher, arguments)
    }
  }
})
