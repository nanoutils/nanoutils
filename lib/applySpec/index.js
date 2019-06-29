import curry1more from '../_internal/_curry1more'

export default curry1more(function applySpec(cbs, ...args) {
  return Object.keys(cbs).reduce((res, cur) => {
    res[cur] = typeof cbs[cur] === 'object'
      ? applySpec(cbs[cur], ...args)
      : cbs[cur](...args)
    return res
  }, {})
})
