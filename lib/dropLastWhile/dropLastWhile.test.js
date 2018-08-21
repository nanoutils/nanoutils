import dropLastWhile from '.'

test('drops elements of array until cb becomes false', () => {
  const val = dropLastWhile(i => i !== 1, [5, 4, 3, 2, 1, 5, 2])
  expect(val).toEqual([5, 4, 3, 2, 1])
})

test('works for docs', () => {
  const dropWhileGreater2 = dropLastWhile(value => value > 2)

  expect(dropWhileGreater2('1234')).toEqual('12')
  expect(dropWhileGreater2([1, 2, 3, 4])).toEqual([1, 2])
})
