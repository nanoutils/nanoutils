import _curry2 from '../_internal/_curry2'

export default _curry2(function endsWith(suffix, list) {
  if (process.env.NODE_ENV !== 'production') {
    if (list.length === 0) throw new Error('[Nanoutils] 2nd argument should not be empty array or string')
    if (!Array.isArray(list) && typeof list !== 'string') throw new Error('[Nanoutils] 2nd argument should be string or array,' + typeof list + ' provided')
  }
  return suffix === list[list.length - 1]
})
