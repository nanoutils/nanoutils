import mergeDeepRight from '../../cjs/mergeDeepRight'

it('merges two object. in a case of repeating values, second key is preferred', () => {
  const first = { a: 1, b: 2 }
  const second = { a: 2, c: 3 }

  expect(mergeDeepRight(first, second)).toMatchObject({ a: 2, b: 2, c: 3 })
})

test('if values is objects, these values are recursive merging prefering second object', () => {
  const first = { a: 1, b: { c: 3 } }
  const second = { d: 3, b: { c: 4, e: 1 } }

  expect(mergeDeepRight(first, second)).toMatchObject({ a: 1, b: { c: 4, e: 1 }, d: 3 })
})
