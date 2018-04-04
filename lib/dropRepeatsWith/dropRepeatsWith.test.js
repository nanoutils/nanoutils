import dropRepeatsWith from '.'

test('drops only consecutively repeating values according to provided predicate', () => {
  const list = [-1, 1, 1, 2, -2, 2]
  const func = (a, b) => Math.abs(a) === Math.abs(b)
  expect(dropRepeatsWith(func, list)).toEqual([-1, 2])
})
