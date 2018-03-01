import _set from '../_set'

test('can test if a set has some value (not only primitives)', () => {
  const arr = [false, 1, { a: 1 }, '123', [0, true, '2', { a: 3 }], a => a + 1, function foo() { return 'bar'; }]
  const set = _set(arr)
  arr.forEach(element => expect(set.has(element)).toBe(true))
})

test('can extract array without duplicates', () => {
  const arr = [1, 1, { a: 2 }, { a: 2 }, [3], [3], { a: 2 }, { a: 2 }, 1, 1]
  const set = _set(arr)
  expect(set.values()).toEqual([1, { a: 2 }, [3]])
})

test('can concatenate existing set with new array values', () => {
  const arr = [1, 2, 3]
  const set = _set(arr)
  expect(set.concat([2, 3, 4]).values()).toEqual([1, 2, 3, 4])
})

test('cannot support circular objects and arrays', () => {
  const arr1 = [1, 2, 3]
  const arr2 = [2, 3, 4]
  arr1.push(arr2)
  arr2.push(arr1)
  expect(() => _set(arr1)).toThrowError('Converting circular structure to JSON')

  const obj1 = { a: { b: { c: 1 }}}
  const obj2 = { b: { c: { d: 1 }}}
  obj1.a.b.d = obj2
  obj2.b.c.e = obj1
  expect(() => _set([obj1, obj2])).toThrowError('Converting circular structure to JSON')
})
