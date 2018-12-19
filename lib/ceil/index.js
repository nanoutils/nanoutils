import clamp from '../clamp/clamp'

export default function ceil(number, precision) {
  precision = clamp(-292, 292, precision || 0)
  if (!precision) {
    return number
  }

  var beforeAndAfter = function(value) {
    var pair = (number + 'e').split('e')
    pair[1] = +pair[1] + value
    pair.length = 2
    return pair.join('e')
  }

  number = Math.ceil(beforeAndAfter(precision))
  return +beforeAndAfter(-precision)
}
