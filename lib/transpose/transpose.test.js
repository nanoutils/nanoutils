import transpose from '.'

test("transposes the rows and columns of a 2D list", () => {
  const list = [[1, 2, 3], ['a', 'b', 'c']]

  expect(transpose(list)).toEqual([[1, 'a'], [2, 'b'], [3, 'c']])
})

test("transposes list and skips empty values", () => {
  const list = [[1, 2, 3], ['a', 'b'], [], [false]]

  expect(transpose(list)).toEqual([[1, 'a', false], [2, 'b'], [3]])
})
