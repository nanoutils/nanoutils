import curry3 from '../_internal/_curry3'

export default curry3((func, arr1, arr2) => {
  var res = []
  var values = arr1.concat(arr2)
  var i = 0
  while (i < values.length) {
    if (!res.some(comparing => func(values[i], comparing))) {
      res.push(values[i])
    }
    i++
  }
  return res
})
