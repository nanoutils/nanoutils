import map from '../../cjs/map'

const double = v => v * 2

it('doubles values (array)', () => {
  const arr = [1, 4, 9, 16]
  expect(map(double, arr)).toEqual([2, 8, 18, 32])
})

it('doubles values (object)', () => {
  const object = { a: 1, b: 4, c: 9, d: 16 }
  expect(map(double, object)).toMatchObject({ a: 2, b: 8, c: 18, d: 32 })
})
