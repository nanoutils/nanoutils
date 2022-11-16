import lens from '../lens'
import shallowCloneObjectAndArrays from '../_internal/_shallow_clone'

export default (p) =>
  lens(
    (obj) => p.reduce((val, k) => (val != null ? val[k] : undefined), obj),
    (val, obj) => {
      if (typeof obj !== 'object') return obj

      var nextObj = shallowCloneObjectAndArrays(obj)
      var currentObj = nextObj
      for (let i = 0; i < p.length - 1; i++) {
        var prop = p[i]

        if (!(prop in currentObj)) {
          currentObj[prop] = Number.isNaN(parseInt(p[i + 1])) ? {} : []
        }

        currentObj[prop] = shallowCloneObjectAndArrays(currentObj[prop])
        currentObj = currentObj[prop]
      }

      currentObj[p.slice(-1)[0]] = val
      return nextObj
    },
  )
