import curry1more from '../_internal/_curry1more'

export default curry1more((cbs, ...args) => cbs.map((cb) => cb(...args)))
