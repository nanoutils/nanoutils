import invertObj from '.'

test('returns object, where values become keys, and last key or value is preferred', () => {
  const obj = { a: 'hello', b: 'hey', c: 'hello' }
  const list = ['hello', 'hey', 'hello']

  expect(invertObj(obj)).toMatchObject({ hello: 'c', hey: 'b' })
  expect(invertObj(list)).toMatchObject({ hello: '2', hey: '1' })
})
