import _curry3 from '../_internal/_curry3'

export default _curry3((f1, f2, arg) => f1(f2(arg)))
