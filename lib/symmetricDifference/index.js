export default function symmetricDifference(list1, list2) {
  var result = []
  var i
  var length1 = list1.length
  var length2 = list2.length
  for (i = 0; i < length1; i++) if (!list2.includes(list1[i])) result.push(list1[i])
  for (i = 0; i < length2; i++) if (!list1.includes(list2[i])) result.push(list2[i])
  return result
}
