import groupBy from '.'

test('groups list items in object under keys, that was returned by supplied function', () => {
  const func = x => x % 2 === 0 ? 'even' : 'odd'
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const result = groupBy(func, list)

  expect(result).toMatchObject({ even: [2, 4, 6, 8, 10], odd: [1, 3, 5, 7, 9] })
})
