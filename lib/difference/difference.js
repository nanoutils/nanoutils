import equals from '../equals/equals'
import differenceWith from '../differenceWith/differenceWith'

export default function difference(a, b) {
  return differenceWith(equals, a, b)
}
