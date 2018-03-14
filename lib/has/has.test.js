import has from '.'

test('checks if object has provided own property', () => {
  const obj = { a: 1 }
  expect(has('a', obj)).toBeTruthy()
  expect(has('a')(obj)).toBeTruthy()

  expect(has('b', obj)).toBeFalsy()
  expect(has('b')(obj)).toBeFalsy()
})
