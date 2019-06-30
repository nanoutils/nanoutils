export default function curry1more(f) {
  return (...args) => args.length >= 2
    ? f(...args)
    : (...args2) => f(...args, ...args2)
}
