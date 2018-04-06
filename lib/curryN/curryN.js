import placehold from '../_internal/_placehold'

export default function curryN(n, fn) {
  return placehold(
    Object.defineProperty(
      function() {
        return n - arguments.length > 0
          ? curryN(
            n - arguments.length,
            fn.bind.apply(fn, [fn].concat(arguments))
          )
          : fn.apply(fn, arguments)
      },
      'nanoLen',
      {
        writable: false,
        value: n
      }
    )
  )
}
