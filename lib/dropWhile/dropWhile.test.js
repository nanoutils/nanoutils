import dropWhile from '.'

test('drops elements of array until cb becomes false', () => {
  const val = dropWhile(i => i !== 1, [5, 4, 3, 2, 1, 5, 2])
  expect(val).toEqual([1, 5, 2])
})

test('works for docs', () => {
  const dropWhileLess3 = dropWhile(value => value < 3)

  expect(dropWhileLess3('1234')).toEqual('34')
  expect(dropWhileLess3([1, 2, 3, 4])).toEqual([3, 4])
})
