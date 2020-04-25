import curry2 from '../_internal/_curry2'

export default curry2((fn, value) => {
  var res = []
  var cond = fn(value)
  while (cond !== false) {
    res.push(cond[0])
    value = cond[1]
    cond = fn(value)
  }
  return res
})
