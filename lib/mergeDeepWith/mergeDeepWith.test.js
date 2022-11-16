import mergeDeepWith from '../../cjs/mergeDeepWith'

it('merges two objects recursively, applies function to repeating keys and passing result to new object', () => {
  const a = { a: 1, b: { c: [1, 2] } }
  const b = { d: 2, b: { c: [3, 4] } }
  const func = (a, b) => a.concat(b)

  expect(mergeDeepWith(func, a, b)).toMatchObject({
    a: 1,
    d: 2,
    b: { c: [1, 2, 3, 4] },
  })
})
