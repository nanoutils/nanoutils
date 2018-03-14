import hasIn from '.'

test('checks if object has provided property as its own or in prototype chain', () => {
  const protoObj = { a: 1, c: undefined }
  const obj = { b: 2, __proto__: protoObj }

  expect(hasIn('a', obj)).toBeTruthy()
  expect(hasIn('a')(obj)).toBeTruthy()

  expect(hasIn('b', obj)).toBeTruthy()
  expect(hasIn('b')(obj)).toBeTruthy()

  expect(hasIn('c', obj)).toBeTruthy()
  expect(hasIn('c')(obj)).toBeTruthy()

  expect(hasIn('d', obj)).toBeFalsy()
  expect(hasIn('d')(obj)).toBeFalsy()
})
