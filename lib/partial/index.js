import toArray from '../toArray'

export default function partial(cb, args) {
  return function() {
    return cb.apply(
      cb,
      args.concat(toArray(arguments).slice(0, cb.length - args.length))
    )
  }
}
