import splitWhen from '.'

test('no tests yet', () => {
  expect(splitWhen(i => i === 3, [1, 2, 3, 1, 2, 3])).toEqual([
    [1, 2],
    [3, 1, 2, 3]
  ])
})
