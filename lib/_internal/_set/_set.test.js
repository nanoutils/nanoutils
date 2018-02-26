import _set from '../_set'

test('can test if a set has some value (not only primitives)', () => {
  const arr = [false, 1, { a: 1 }, '123', [0, true, '2', { a: 3 }]]
  const set = new _set(arr)
  arr.forEach(element => expect(set.has(element)).toBe(true))
})
