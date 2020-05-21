export default (a, b) => {
  if (a !== a) return b !== b
  if (a === 0 && b === 0) return 1 / a === 1 / b
  return a === b
}
