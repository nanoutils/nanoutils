export default (arr) =>
  Array.isArray(arr)
    ? [].concat.apply([], arr)
    : []
