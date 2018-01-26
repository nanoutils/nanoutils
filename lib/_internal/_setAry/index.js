export default function _setAry(n, fn) {
  return Object.defineProperty(fn, 'nanoLen', {
    value: n,
    writable: false,
    enumerable: false
  })
}
