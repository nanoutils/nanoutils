import { expectNumberOfArgs } from '../_internal/_test'
import updateIn from '.'

test('it accepts exact 3 arguments', () => {
  expectNumberOfArgs(
    updateIn,
    3,
    [v => v === 2, 10, [0, 1, 2]]
  )
})

test('updates value in list with specified predicate', () => {
  const list = [1, 2, 3, 4, 5]

  expect(updateIn(v => v === 2, 10, list)).toEqual([1, 10, 3, 4, 5])
})

test('does not mutate original array', () => {
  const list = [1, 2]
  const result = updateIn(v => v === 2, 10, list)

  expect(result).toEqual([1, 10])
  expect(list).toEqual([1, 2])
  expect(result !== list).toBeTruthy()
})
