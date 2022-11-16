import { expectNumberOfArgs } from '../../cjs/_internal/_test'
import add from '../../cjs/add'

test('it accepts exact 2 arguments', () => {
  expectNumberOfArgs(add, 2, [1, 2])
})

test('sums two numbers', () => {
  expect(add(4)(3)).toEqual(7)
})

test('sums number to number from string', () => {
  expect(add('4')(3)).toEqual(7)
})

test('sums two numbers from string', () => {
  expect(add('4')('3')).toEqual(7)
})

test("NaN if it's either of the arguments are not number-like", () => {
  expect(add(4)('a')).toBeNaN()
})

test('null equals to 0', () => {
  expect(add(null)(null)).toEqual(0)
})

test('false and true equal to 0 and 1 respectively', () => {
  expect(add(false)(false)).toEqual(0)
  expect(add(true)(true)).toEqual(2)
})

test('empty array equals to 0, non-empty - to first element', () => {
  expect(add([])([])).toEqual(0)
  expect(add([])([5])).toEqual(5)
  expect(add([5])([])).toEqual(5)
  expect(add([5])([5])).toEqual(10)
})
