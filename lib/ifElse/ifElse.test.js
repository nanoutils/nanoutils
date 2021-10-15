import { always, ifElse, inc, isInteger } from '../'

var getEven = ifElse(
  (i) => i % 2 === 0,
  (i) => i,
  (i) => i + 1,
)

test('applies 1st callback if condition is true', () => {
  expect(getEven(1)).toBe(2)
})

test('applies 2nd callback if condition is false', () => {
  expect(getEven(2)).toBe(2)
})

test('works for docs', () => {
  const safeInc = ifElse(isInteger, inc, always(0))
  expect(safeInc()).toBe(0)
  expect(safeInc(1)).toBe(2)
  expect(safeInc(null)).toBe(0)
})
