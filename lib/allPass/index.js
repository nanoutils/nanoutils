import curry2 from '../_internal/_curry2'

export default curry2((cbs, data) => {
  for (var i = 0; i < cbs.length; i++) {
    if (!cbs[i](data)) return false
  }
  return true
})
