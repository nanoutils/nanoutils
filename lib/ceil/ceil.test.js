import { expectExactNumberOfArgs } from '../../cjs/_internal/_test'
import ceil from '../../cjs/ceil'

it('accepts 1 or 2 arguments', () => {
  expectExactNumberOfArgs(ceil, [1])
  expectExactNumberOfArgs(ceil, [1, 2])
})

it('uses precision zero by default', () => {
  expect(ceil(5)).toBe(5)
})

it('returns same number if precision is zero', () => {
  [-15.004, 2, -1e-30, 0, 3, 14.992, 1e28].forEach(number => {
    expect(ceil(number, 0)).toBe(Math.ceil(number))
  })
})

it('returns value with digits before . changed if precision is negative', () => {
  expect(ceil(15.2, -1)).toBe(20)
  expect(ceil(15.2, -2)).toBe(100)
  expect(ceil(15.2, -3)).toBe(1000)
})

it('returns value with digits after . changed if precision is positive', () => {
  expect(ceil(15.0002, 1)).toBe(15.1)
  expect(ceil(15.0002, 2)).toBe(15.01)
  expect(ceil(15.0002, 3)).toBe(15.001)
  expect(ceil(15.0002, 4)).toBe(15.0002)
})
