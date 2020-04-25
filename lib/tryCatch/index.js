import curry2 from '../_internal/_curry2'

export default curry2((trier, catcher) => (...args) => {
  try {
    return trier(...args)
  } catch (err) {
    return catcher(...args)
  }
})
