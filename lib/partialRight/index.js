import toArray from '../toArray'

export default function partialRight(cb, args) {
  return function() {
    return cb.apply(
      cb,
      toArray(arguments)
        .slice(0, cb.length - args.length)
        .concat(args)
    )
  }
}
