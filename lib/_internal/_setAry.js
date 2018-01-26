export default function _setAry(n, fn) {
  return Object.defineProperty(fn, 'nanoLen', {
    writable: false,
    value: n
  })
}
