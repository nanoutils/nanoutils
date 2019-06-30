import _merge from '.'

const mergeStrategy = (a, b) => [...a, ...b]

describe('_merge', () => {
  it('returns a new object with the 1st object merged with the 2nd', () => {
    expect(_merge({ a: 1, b: 1 }, { b: 2, c: 2 })).toEqual({ a: 1, b: 2, c: 2 })
  })

  it('can be used with custom merge strategy', () => {
    expect(_merge({ v: [1, 2] }, { v: [3, 4] }, mergeStrategy)).toEqual({ v: [1, 2, 3, 4] })
  })
})
