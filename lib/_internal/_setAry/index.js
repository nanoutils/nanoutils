export default (n, fn) => Object.defineProperty(fn, 'nul', {
  value: n,
  writable: false,
  enumerable: false
})
