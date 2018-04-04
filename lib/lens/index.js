export default function lens(getter, setter) {
  return function(v) {
    return {
      get() {
        return getter(v)
      },
      set(val) {
        return setter(val, v)
      }
    }
  }
}
