import over from '.'

test('updates value by its path', () => {
  const val = over('a.b', i => i + 1, { a: { b: 2 } })
  expect(val).toEqual({
    a: { b: 3 }
  })
})

test('works correctly for arrays', () => {
  const val = over(0, i => i + 10, [1, 2, 3])
  expect(val).toEqual([11, 2, 3])
})
