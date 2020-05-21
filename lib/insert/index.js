import curry3 from '../_internal/_curry3'

export default curry3((idx, val, list) => {
  var a = list.slice()
  a.splice(idx, 0, val)
  return a
})
