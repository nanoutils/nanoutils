import scan from '.'

test('returns a list of successively reduced values', () => {
  expect(scan((a, b) => a * b, 1, [1, 2, 3, 4])).toEqual([1, 1, 2, 6, 24])
})
