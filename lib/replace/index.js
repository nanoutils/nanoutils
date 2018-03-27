import _curry3 from '../_internal/_curry3'

export default _curry3(function replace(searchValue, replaceValue, str) {
  return str.replace(searchValue, replaceValue)
})
