import xprod from '.'

it('creates all combinations of values', () => {
  expect(xprod([1, 2], ['a', 'b'])).toEqual([
    [1, 'a'],
    [1, 'b'],
    [2, 'a'],
    [2, 'b']
  ])
})
