export default function flatten (arr) {
  var fl = [];
  function each (v) {
    Array.isArray(v)
      ? v.forEach(each)
      : fl.push(v);
  }
  Array.isArray(arr) && arr.forEach(each);
  return fl;
}
