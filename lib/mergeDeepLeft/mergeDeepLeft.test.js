import mergeDeepLeft from '.'

describe('mergeDeepLeft', () => {
  it('merges two object. in a case of repeating values, first key is preferred', () => {
    const first = { a: 1, b: 2 }
    const second = { a: 2, c: 3 }

    expect(mergeDeepLeft(first, second)).toMatchObject({ a: 1, b: 2, c: 3 })
  })

  test('if values is objects, these values are recursive merging prefering first object', () => {
    const first = { a: 1, b: { c: 3 } }
    const second = { d: 3, b: { c: 4, e: 1 } }

    expect(mergeDeepLeft(first, second)).toMatchObject({ a: 1, b: { c: 3, e: 1 }, d: 3 })
  })
})
