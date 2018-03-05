import reduceWhile from '.'

test('no tests yet', () => {
  const isOdd = (acc, x) => x % 2 === 1
  const sum = (a, b) => a + b
  expect(reduceWhile(isOdd, sum, 0, [1, 3, 5, 60, 777, 800])).toEqual(9)
})
