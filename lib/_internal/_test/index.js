/**
 * Check for accepting number of arguments for given function
 * @param {function} f - function to check
 * @param {number} n - number of accepting arguments
 * @param {array} args - example of arguments to check
 */
export function expectNumberOfArgs(f, n, args) {
  let k = n
  while (k > 0) {
    expect(typeof f).toBe('function')
    f = f(args[n - k--])
  }
  expect(typeof f).not.toBe('function')
}

export function expectExactNumberOfArgs(f, args) {
  expect(typeof f.apply(f, args)).not.toBe('function')
}
