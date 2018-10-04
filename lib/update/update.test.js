import { expectNumberOfArgs } from '../_internal/_test'
import update from '.'

test('it accepts exact 3 arguments', () => {
  expectNumberOfArgs(
    update,
    3,
    [2, 10, [0, 1, 2]]
  )
})

test('updates value in list at the given index', () => {
  const list = [1, 2, 3, 4, 5]

  expect(update(1, 10, list)).toEqual([1, 10, 3, 4, 5])
})

test('does not mutate original array', () => {
  const list = [1, 2]
  const result = update(1, 10, list)

  expect(result).toEqual([1, 10])
  expect(list).toEqual([1, 2])
  expect(result !== list).toBeTruthy()
})

test('checks dev errors', () => {
  expect(() => update('1', 10, [1, 2, 3])).toThrowErrorMatchingSnapshot()
  expect(update(1, false, [1, 2, 3])).toEqual([1, false, 3])
  expect(() => update(1, 10, '123')).toThrowErrorMatchingSnapshot()
})
