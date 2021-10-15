import _curry3 from '../_internal/_curry3'

export default _curry3((f, a, b) => (f(a) < f(b) ? a : b))
