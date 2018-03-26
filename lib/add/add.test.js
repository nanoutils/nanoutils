import { expectNumberOfArgs } from '../_internal/_test'
import add from '.'

test('it accepts exact 2 arguments', () => {
  expectNumberOfArgs(
    add,
    2,
    [1, 2]
  )
})

test('sums two numbers', () => {
  expect(add(4)(3)).toEqual(7)
})

test('sums two numbers from string', () => {
  expect(add('4')(3)).toEqual(7)
})
