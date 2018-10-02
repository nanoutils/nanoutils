export default function lens(getter, setter) {
  return function(v) {
    return {
      get: function() {
        return getter(v)
      },
      set: function(val) {
        return setter(val, v)
      }
    }
  }
}
