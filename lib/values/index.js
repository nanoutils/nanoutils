export default function values(obj) {
  return Object.keys(obj).map(key => obj[key])
}
