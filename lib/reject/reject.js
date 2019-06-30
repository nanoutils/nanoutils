export default function reject(cb, obj) {
  return Array.isArray(obj)
    ? obj.filter(i => !cb(i))
    : Object.keys(obj).reduce((res, cur) => {
      if (!cb(obj[cur])) res[cur] = obj[cur]
      return res
    }, {})
}
