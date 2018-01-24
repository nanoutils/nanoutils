export default function flatten(arr) {
  return Array.isArray(arr) 
    ? [].concat.apply([], arr) 
    : []
}
