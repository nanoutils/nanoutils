import { expectNumberOfArgs } from '../_internal/_test'
import adjustIn from '.'
import add from '../add'
import multiply from '../multiply'

const addTen = add(10)
const multiplyByTwo = multiply(2)

test('it accepts exact 3 arguments', () => {
  expectNumberOfArgs(
    adjustIn,
    3,
    [addTen, v => v === 1, [0, 1, 2]]
  )
})

test('applies function to array item with specified predicate', () => {
  expect(adjustIn(addTen, v => v === 4, [2, 3, 4, 5, 6])).toEqual([2, 3, 14, 5, 6])
  expect(adjustIn(multiplyByTwo, v => v === 6, [2, 3, 4, 5, 6])).toEqual([2, 3, 4, 5, 12])
})

test('return array itself if no element is found', () => {
  expect(adjustIn(addTen, v => v === 10, [2, 3, 4, 5, 6])).toEqual([2, 3, 4, 5, 6])
  expect(adjustIn(multiplyByTwo, v => v === 10, [2, 3, 4, 5, 6])).toEqual([2, 3, 4, 5, 6])
})

test('returns a copy even if no element is found', () => {
  const arr = [1, 2, 3]
  expect(adjustIn(addTen, v => v === 4, arr) === arr).toBeFalsy()
})

test('checks dev errors', () => {
  expect(() => adjustIn(1, 2, [3])).toThrowErrorMatchingSnapshot()
  expect(() => adjustIn(a => a + 1, false, [3])).toThrowErrorMatchingSnapshot()
  expect(() => adjustIn(a => a + 1, v => v === 3, 3)).toThrowErrorMatchingSnapshot()
})
