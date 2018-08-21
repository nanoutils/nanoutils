import dropRepeatsWith from '.'

test('drops only consecutively repeating values according to provided predicate', () => {
  const isAbsEqual = (a, b) => Math.abs(a) === Math.abs(b)
  const isNextEqual = (a, b) => +a + 1 === +b

  expect(dropRepeatsWith(isAbsEqual, [-1, 1, 1, 2, -2, 2])).toEqual([-1, 2])
  expect(dropRepeatsWith(isNextEqual, '112334555')).toEqual('11355')
})
