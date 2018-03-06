import _curry3 from '../_internal/_curry3'

export default _curry3(function scan(cb, init, list) {
  return list.reduce(
    function(res, val) {
      return res.concat([cb(res[res.length - 1], val)])
    },
    [init]
  )
})
