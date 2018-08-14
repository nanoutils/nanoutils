import curry2 from '../_internal/_curry2'

export default curry2(function dissoc(prop, obj) {
  var res = {}
  for (var key in obj) res[key] = obj[key]
  delete res[prop]
  return res
})
