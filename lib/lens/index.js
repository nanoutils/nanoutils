export default (getter, setter) => (v) => ({
  get: () => getter(v),
  set: (val) => setter(val, v),
})
