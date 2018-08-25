import unfold from '.'

const iteration = (a) => a > 50 ? false : [a, a + 10]

test('unfolds the value into a list through iteration function', () => {
  expect(unfold(iteration, 10)).toEqual([10, 20, 30, 40, 50])
  expect(unfold(iteration)(10)).toEqual([10, 20, 30, 40, 50])
})

test('does not mutate original value', () => {
  let value = 10

  unfold(iteration, value)
  expect(value).toBe(10)
})
