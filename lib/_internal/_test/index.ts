import { expect } from "earljs";

/**
 * Check for accepting number of arguments for given function
 * @param {function} f - function to check
 * @param {number} n - number of accepting arguments
 * @param {array} args - example of arguments to check
 */
export function expectNumberOfArgs<Args extends unknown>(
  f: (args: Args) => unknown,
  n: number,
  args: Args[]
) {
  let k = n;
  let g: (args: Args) => unknown = f;
  while (k > 0) {
    expect(g).toBeA(Function);
    g = g(args[n - k--]) as (args: Args) => unknown;
  }
  expect(g).not.toBeA(Function);
}

export function expectExactNumberOfArgs<Args extends unknown>(
  f: (args: Args) => unknown,
  args: Args[]
) {
  expect(f.apply(f, args)).not.toBeA(Function);
}
