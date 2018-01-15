import toArray from '../toArray'

export default function flip(fn) {
  return function() {
    return fn.apply(fn, toArray(arguments).reverse())
  }
}
