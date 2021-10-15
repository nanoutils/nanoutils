import curry2 from '../_internal/_curry2'

export default curry2(
  (cb, enhancers) => (arg) => cb(...enhancers.map((enhancer) => enhancer(arg))),
)
