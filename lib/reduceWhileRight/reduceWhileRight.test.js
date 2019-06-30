import reduceWhileRight from '../../cjs/reduceWhileRight'

test('no tests yet', () => {
  const isOdd = (x, acc) => x % 2 === 1
  const sum = (a, b) => a + b
  expect(reduceWhileRight(isOdd, sum, 0, [800, 777, 60, 5, 3, 1])).toEqual(9)
})
