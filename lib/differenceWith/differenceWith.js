export default function differenceWith(compare, first, second) {
  var result = []
  var firstIndex, secondIndex, thirdIndex
  for (firstIndex = 0; firstIndex < first.length; firstIndex++) {
    thirdIndex = 0
    secondIndex = 0
    while (thirdIndex < second.length && !compare(first[firstIndex], second[thirdIndex])) {
      thirdIndex += 1
    }
    if (thirdIndex < second.length) continue
    while (secondIndex < result.length && !compare(first[firstIndex], result[secondIndex])) {
      secondIndex += 1
    }
    if (secondIndex === result.length) {
      result.push(first[firstIndex])
    }
  }
  return result
}
