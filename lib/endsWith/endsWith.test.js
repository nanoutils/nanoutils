import endsWith from '.'

test('checks if last element is equals to suffix', () => {
  expect(endsWith('c', 'abc')).toBeTruthy()
  expect(endsWith('b', 'abc')).toBeFalsy()
  expect(endsWith(3, [1, 2, 3])).toBeTruthy()
  expect(endsWith(3)([1, 2, 3])).toBeTruthy()
})
