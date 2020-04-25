import equals from '../equals/equals'
import differenceWith from '../differenceWith/differenceWith'

export default (a, b) => differenceWith(equals, a, b)
