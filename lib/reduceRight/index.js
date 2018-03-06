import _curry3 from '../_internal/_curry3'

export default _curry3(function reduceRight(cb, init, list) {
  var res = init
  var revert = [].concat(list)
  while (revert.length) res = cb(revert.pop(), res)
  return res
})
