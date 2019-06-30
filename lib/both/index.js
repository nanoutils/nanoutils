export default function both(fn1, fn2) {
  return (...args) => fn1(...args) && fn2(...args)
}
