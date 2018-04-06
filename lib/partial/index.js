export default function partial(cb, args) {
  return function() {
    return cb.apply(
      cb,
      args.concat([].slice.call(arguments, 0, cb.length - args.length))
    )
  }
}
