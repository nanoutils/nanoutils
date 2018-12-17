export default function indexOf(val, obj) {
  return obj != null && obj.indexOf
    ? obj.indexOf(val)
    : -1
}
