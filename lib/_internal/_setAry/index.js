export default function _setAry(n, fn) {
  return Object.defineProperty(fn, 'nul', {
    value: n,
    writable: false,
    enumerable: false
  })
}
