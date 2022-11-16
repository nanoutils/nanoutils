import lensPath from '../../cjs/lensPath'
import set from '../../cjs/set'

var obj = {
  a: 2,
  b: {
    c: 3,
  },
}

var arr = [1, 2, 3]

test('getter returns object value by key getter', () => {
  const lensBC = lensPath(['b', 'c'])(obj)
  expect(lensBC.get()).toBe(3)
})

test('getter returns undefined for non-objects', () => {
  const lensBC = lensPath(['b', 'c'])(undefined)
  expect(lensBC.get()).toBe(undefined)
})

test('getter returns undefined for non-existent paths', () => {
  const lensBC = lensPath(['b', 'c', 'd'])(obj)
  expect(lensBC.get()).toBe(undefined)
})

test('getter returns value from array', () => {
  const lens0 = lensPath([0])(arr)
  expect(lens0.get()).toBe(1)
})

test('setter sets value (object)', () => {
  const lensD = lensPath(['b', 'c', 'd'])({ a: { b: 2 } })
  expect(lensD.set(3)).toEqual({ a: { b: 2 }, b: { c: { d: 3 } } })
})

test('setter sets value (array)', () => {
  const lensD = lensPath([0, 1, 0])([[2]])
  expect(lensD.set(3)).toEqual([[2, [3]]])
})

test('setter overwrites properties', () => {
  const lensBC = lensPath(['b', 'c'])(obj)
  expect(lensBC.set(2)).toEqual({ a: 2, b: { c: 2 } })
})

test("setter sets nested value even if it's already declared or undefined", () => {
  const lensA = lensPath(['a', 'b', 'c'])({ a: { b: 2 } })
  expect(lensA.set(3)).toEqual({ a: { b: { c: 3 } } })
})

test('setter adds array items if key is numeric', () => {
  const lensB = lensPath(['a', 'b', '1'])({ a: { b: [2] } })
  expect(lensB.set(3)).toEqual({ a: { b: [2, 3] } })
})

test('setter adds properties for non-plain objects', () => {
  const arrWithTest = [2]
  arrWithTest.test = 3

  const lensC = lensPath(['a', 'b', 'test'])({ a: { b: [2] } })
  expect(lensC.set(3).a.b).toEqual(arrWithTest)
})

test('setter adds value to array', () => {
  const lens0 = lensPath([0])(arr)
  expect(lens0.set(11)).toEqual([11, 2, 3])
})

test('setter should NOT mutate original source', () => {
  const source = [
    {
      foo: 1,
      bar: 2,
    },
    {
      foo: 3,
      bar: 4,
    },
  ]

  const path = lensPath([0, 'foo'])

  expect(source[0].foo).toEqual(1)

  const lens = set(path, 42, source)

  expect(lens[0].foo).toEqual(42)
  expect(source[0].foo).toEqual(1)
})

test('setter should NOT mutate original source (2)', () => {
  const source = Object.freeze([
    {
      foo: 1,
      bar: 2,
    },
    {
      foo: 3,
      bar: 4,
    },
  ])

  const path = lensPath([0, 'foo'])

  expect(() => set(path, 42, source)).not.toThrow()
})
