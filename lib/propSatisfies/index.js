import _curry3 from '../_internal/_curry3'

export default _curry3(function propSatisfies(func, prop, obj) {
  return func(obj[prop])
})
