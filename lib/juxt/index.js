import curry1more from '../_internal/_curry1more'

export default curry1more(function juxt(cbs) {
  var args = [].slice.call(arguments, 1)
  return cbs.map(function(cb) {
    return cb.apply(cb, args)
  })
})
