import curry1more from '../_internal/_curry1more'

export default curry1more(function juxt(cbs, ...args) {
  return cbs.map(cb => cb(...args))
})
