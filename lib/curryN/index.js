import placehold from '../placehold'

export default function curryN(n, fn) {
  return placehold(function() {
    return n - arguments.length > 0
      ? curryN(n - arguments.length, fn.bind.apply(fn, [fn].concat(arguments)))
      : fn.apply(fn, arguments)
  }, n)
}
