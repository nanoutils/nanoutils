import _curry3 from "../_internal/_curry3"

export default _curry3(function o(f1, f2, arg) {
  return f1(f2(arg))
})
