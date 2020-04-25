import curry3 from '../_internal/_curry3'

export default curry3((cb, init, list) => {
  var res = init
  var i = list.length - 1
  while (i >= 0) {
    res = cb(list[i--], res)
  }
  return res
})
