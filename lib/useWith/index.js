import curry2 from '../_internal/_curry2'

export default curry2(
  (cb, enhancers) =>
    (...args) =>
      cb(...enhancers.map((enhancer, idx) => enhancer(args[idx]))),
)
