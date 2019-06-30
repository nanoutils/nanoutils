export default function partialRight(cb, args) {
  return (...args2) => cb(...args2.slice(0, cb.length - args.length), ...args)
}
