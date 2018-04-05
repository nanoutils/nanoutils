import equals from '../equals'

export default function dropRepeats(list) {
  var result = []
  for (var i = 0; i < list.length; i++) {
    if (equals(list[i - 1], list[i])) continue
    result.push(list[i])
  }
  return result
}
