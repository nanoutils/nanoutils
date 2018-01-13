var lensPath = require('.')

var obj = {
  a: 2,
  b: {
    c: 3
  }
}

var lensBC = lensPath('b.c')

test('getter returns object value by key getter', () => {
  const lensBC = lensPath('b.c')(obj)
  expect(lensBC.get()).toBe(3)
})

test('getter returns undefined for non-objects', () => {
  const lensBC = lensPath('b.c')(undefined)
  expect(lensBC.get()).toBe(undefined)
})

test('getter returns undefined for non-existent paths', () => {
  const lensBC = lensPath('b.c.d')(obj)
  expect(lensBC.get()).toBe(undefined)
})

test('setter sets value', () => {
  const lensD = lensPath('b.c.d')({ a: { b: 2 } })
  expect(lensD.set(3)).toEqual({ a: { b: 2 }, b: { c: { d: 3 } } })
})

test('setter overwrites properties', () => {
  const lensBC = lensPath('b.c')(obj)
  expect(lensBC.set(2)).toEqual({ a: 2, b: { c: 2 } })
})

test("setter sets nested value even if it's already declared or undefined", () => {
  const lensA = lensPath('a.b.c')({ a: { b: 2 } })
  expect(lensA.set(3)).toEqual({ a: { b: { c: 3 } } })
})

test('setter adds array items if key is numeric', () => {
  const lensB = lensPath('a.b.1')({ a: { b: [2] } })
  expect(lensB.set(3)).toEqual({ a: { b: [2, 3] } })
})

test('setter adds properties for non-plain objects', () => {
  const arrWithTest = [2]
  arrWithTest.test = 3

  const lensC = lensPath('a.b.test')({ a: { b: [2] } })
  expect(lensC.set(3).a.b).toEqual(arrWithTest)
})
