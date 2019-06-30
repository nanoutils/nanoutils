export default function either(fn1, fn2) {
  return (...args) => fn1(...args) || fn2(...args)
}
