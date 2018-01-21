export default function toArray(args) {
  if (
    process.env.NODE_ENV !== 'production' &&
    (args == null ||
      typeof args[Symbol.iterator] !== 'function')
  ) {
    throw new TypeError('Cannot convert ' + typeof args + ' to Array')
  }
  return Array.prototype.slice.call(args)
}
