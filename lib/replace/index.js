import _curry3 from '../_internal/_curry3'

export default _curry3((searchValue, replaceValue, str) =>
  str.replace(searchValue, replaceValue),
)
