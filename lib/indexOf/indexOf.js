export default (val, obj) =>
  obj != null && obj.indexOf
    ? obj.indexOf(val)
    : -1
