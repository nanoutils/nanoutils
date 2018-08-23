export default function either(fn1, fn2) {
  return function() {
    return fn1.apply(fn1, arguments) || fn2.apply(fn2, arguments)
  }
}
