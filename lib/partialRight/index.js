export default function partialRight(cb, args) {
  return function() {
    return cb.apply(
      cb,
      [].slice.call(arguments, 0, cb.length - args.length)
        .concat(args)
    )
  }
}
