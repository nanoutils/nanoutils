export default function call(fn, ...args) {
  return args.length > 0
    ? fn(...args)
    : (...args2) => fn(...args2)
}
