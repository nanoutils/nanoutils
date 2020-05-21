import _curry3 from '../_internal/_curry3'

export default _curry3((func, prop, obj) => func(obj[prop]))
