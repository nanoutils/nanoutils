import add from '../../cjs/add'
import reduceWhile from '../../cjs/reduceWhile'

test('iterates from left to right while predicate returns true', () => {
  const isOdd = (_, value) => value % 2 === 1
  const value = reduceWhile(isOdd, add, 0, [1, 3, 5, 60, 777, 800])
  expect(value).toEqual(9)
})
