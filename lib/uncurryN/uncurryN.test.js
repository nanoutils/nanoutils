import add from '../../cjs/add'
import curryN from '../../cjs/curryN'
import uncurryN from '../../cjs/uncurryN'

it('applies argument to a curried function with N arguments', () => {
  const sum = (a) => (b) => (c) => (d) => a + b + c + d
  expect(uncurryN(4, sum)(1, 2, 3, 4)).toBe(10)
})

it('does not accept extra args', () => {
  const sum = (a) => (b) => (c) => (d) => a + b + c + d
  expect(uncurryN(4, sum)(1, 2, 3, 4, 5)).toBe(10)
})

it('cancels curryN effect', () => {
  const sum5Value = (a, b, c, d, e) => a + b + c + d + e
  const sum5ValueCopy = uncurryN(5, curryN(5, sum5Value))
  const provide5Values = (f) => f(1, 2, 3, 4, 5)
  expect(provide5Values(sum5Value)).toBe(provide5Values(sum5ValueCopy))
})

it('makes curried function uncurried', () => {
  const binaryAdd = uncurryN(2, add)

  expect(binaryAdd(1)).toBeNaN()
  expect(binaryAdd(1, 2)).toBe(3)
})
