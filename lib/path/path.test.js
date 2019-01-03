import path from '.'

it('retrieves value from object by the given path', () => {
  const obj = { a: { b: 2 } }

  expect(path(['a', 'b'], obj)).toBe(2)
  expect(path(['a', 'b', 'c'], obj)).toBeUndefined()
  expect(path(['a'], obj)).toMatchObject({ b: 2 })
})
