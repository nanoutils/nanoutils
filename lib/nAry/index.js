import nul from '../_internal/_nul'

export default function nAry(n, fn) {
  return nul((...args) => fn(...args.slice(0, n)), n)
}
