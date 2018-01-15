import clone from '../clone'

export default function lens(getter, setter) {
  return function(v) {
    return {
      get() {
        return getter(clone(v))
      },
      set(val) {
        return setter(val, clone(v))
      }
    }
  }
}
