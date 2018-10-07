export default function az(propper) {
  return function(first, second) {
    return propper(first).localeCompare(propper(second))
  }
}
