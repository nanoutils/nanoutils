import placehold from '../_placehold'

export default function curry2(f) {
  return placehold(function curried(a, b) {
    return arguments.length >= 2
      ? f(a, b)
      : function(b2) {
        return f(a, b2)
      }
  }, 2)
}
