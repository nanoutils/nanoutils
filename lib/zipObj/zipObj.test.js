import zipObj from '../../cjs/zipObj'

it('creates object with keys from 1st array and values from 2nd', () => {
  expect(zipObj(['a', 'b'], [1, 2])).toEqual({ a: 1, b: 2 })
})

it('ignores extra values', () => {
  expect(zipObj(['a', 'b'], [1, 2, 3])).toEqual({ a: 1, b: 2 })
})

it('sets undefined for extra keys', () => {
  expect(zipObj(['a', 'b', 'c'], [1, 2])).toEqual({
    a: 1,
    b: 2,
    c: undefined,
  })
})
