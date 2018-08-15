import { expectNumberOfArgs } from '../_internal/_test'
import adjust from '.'
import add from '../add'
import multiply from '../multiply'

const addTen = add(10)
const multiplyByTwo = multiply(2)

test('it accepts exact 3 arguments', () => {
  expectNumberOfArgs(
    adjust,
    3,
    [addTen, 1, [0, 1, 2]]
  )
})

test('applies function to array item by index', () => {
  expect(adjust(addTen, 2, [2, 3, 4, 5, 6])).toEqual([2, 3, 14, 5, 6])
  expect(adjust(multiplyByTwo, 4, [2, 3, 4, 5, 6])).toEqual([2, 3, 4, 5, 12])
})

test('return array itself if no element by index does not exist', () => {
  expect(adjust(addTen, 10, [2, 3, 4, 5, 6])).toEqual([2, 3, 4, 5, 6])
  expect(adjust(multiplyByTwo, 10, [2, 3, 4, 5, 6])).toEqual([2, 3, 4, 5, 6])
})

test('returns copy even if index out of bounds', () => {
  const arr = [1, 2, 3]
  expect(adjust(addTen, 4, arr) === arr).toBeFalsy()
})
