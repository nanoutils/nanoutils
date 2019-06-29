import curry2 from '../_internal/_curry2'

export default curry2(function tryCatch(trier, catcher) {
  return function(...args) {
    try {
      return trier(...args)
    } catch (err) {
      return catcher(...args)
    }
  }
})
