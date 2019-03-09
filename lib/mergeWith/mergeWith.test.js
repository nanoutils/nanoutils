import mergeWith from '.'

describe('mergeWith', () => {
  it('works for currying for objects', () => {
    const mergeStrategy = mergeWith((a, b) => {
      const typeA = typeof a
      const typeB = typeof b
      if (typeA === typeB) {
        if (typeA === 'boolean') {
          return a && b
        } else if (typeA === 'number') {
          return a * b
        } else if (Array.isArray(a) && Array.isArray(b)) {
          return [...a, ...b]
        }
      }
      return a
    })

    expect(mergeStrategy({ v: [1, 2] }, { v: [3, 4] })).toEqual({ v: [1, 2, 3, 4] })
    expect(mergeStrategy({ v: [1, 2] }, { v: [3, 4] }, { v: [5, 6] })).toEqual({ v: [1, 2, 3, 4, 5, 6] })
    expect(mergeStrategy({ v: [1, 2] }, { v: [3, 4] }, { v: [5, 6] }, { v: [7, 8] })).toEqual({ v: [1, 2, 3, 4, 5, 6, 7, 8] })

    const args = [{ v: [1, 2] }, { v: [3, 4] }, { v: [5, 6] }, { v: [7, 8] }, { v: [9, 10] }]
    expect(mergeStrategy(...args)).toEqual({ v: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] })
  })
})
