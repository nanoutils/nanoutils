import { expectNumberOfArgs } from '../_internal/_test'
import clamp from '.'

test('it accepts exact 3 arguments', () => {
  expectNumberOfArgs(clamp, 3, [1, 2, 3])
})

test('returns min number if number is less', () => {
  expect(clamp(5, 10, 2)).toBe(5)
})

test('returns max number if number is greater', () => {
  expect(clamp(5, 10, 12)).toBe(10)
})

test('returns number if number is in range', () => {
  expect(clamp(5, 10, 7)).toBe(7)
})

test('correctly works with extreme points', () => {
  expect(clamp(5, 10, 5)).toBe(5)
  expect(clamp(5, 10, 10)).toBe(10)
})
