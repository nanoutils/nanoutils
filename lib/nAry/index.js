import nul from '../_internal/_nul'

export default (n, fn) => nul((...args) => fn(...args.slice(0, n)), n)
