import curry1more from '../_internal/_curry1more'

const applySpec = (cbs, ...args) =>
  Object.keys(cbs).reduce((res, cur) => {
    res[cur] =
      typeof cbs[cur] === 'object'
        ? applySpec(cbs[cur], ...args)
        : cbs[cur](...args)
    return res
  }, {})

export default curry1more(applySpec)
