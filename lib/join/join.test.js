import join from '.'

test("joins array into string using delimiter", () => {
  const arr = [1, 2, 3, 4, 5]
  expect(join('-', arr)).toBe('1-2-3-4-5')
})

test("supports curring", () => {
  const arr = [1, 2, 3, 4, 5]
  const delimiter = join('~')
  expect(delimiter(arr)).toBe('1~2~3~4~5')
})
