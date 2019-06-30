export default function lens(getter, setter) {
  return v => ({
    get: () => getter(v),
    set: (val) => setter(val, v)
  })
}
