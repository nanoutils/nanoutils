export default function evolve(cbs, obj) {
  return Object.keys(obj).reduce((res, key) => {
    res[key] = cbs[key]
      ? typeof cbs[key] === 'object'
        ? evolve(cbs[key], obj[key])
        : cbs[key](obj[key])
      : obj[key]
    return res
  }, {})
}
