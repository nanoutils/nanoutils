import curry2more from '../_internal/_curry2more'

export default curry2more(function juxt(cbs) {
  var args = [].slice.call(arguments, 1)
  return cbs.map(function(cb) {
    return cb.apply(cb, args)
  })
})
