import transpose from '../../cjs/transpose'

it('transposes rows and columns in 2D array', () => {
  const list = [
    [1, 2, 3],
    ['a', 'b', 'c'],
  ]

  expect(transpose(list)).toEqual([
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
  ])
})

it('transposes array and skips empty values', () => {
  const list = [[1, 2, 3], ['a', 'b'], [], [false]]

  expect(transpose(list)).toEqual([[1, 'a', false], [2, 'b'], [3]])
})
