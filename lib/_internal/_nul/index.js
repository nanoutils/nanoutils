export default (fn, length) =>
  Object.defineProperty(fn, 'nul', {
    writable: false,
    value: length,
  })
