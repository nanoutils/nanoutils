import curry2 from '../_internal/_curry2'

export default curry2(function converge(cb, enhancers) {
  return arg => cb.apply(
    cb,
    enhancers.map(enhancer => enhancer(arg))
  )
})
