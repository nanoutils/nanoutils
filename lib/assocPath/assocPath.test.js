var assocPath = require('.')

test('creates nesting object associated with given path and places given value into its tail', () => {
  const obj = { a: { b: { c: 0 } } }
  expect(assocPath(['a', 'b', 'c'], 42, obj)).toEqual({ a: { b: { c: 42 } } })
  expect(assocPath(['a', 'b', 'c'])(42, obj)).toEqual({ a: { b: { c: 42 } } })
  expect(assocPath(['a', 'b', 'c'])(42)(obj)).toEqual({ a: { b: { c: 42 } } })
  expect(assocPath(['a', 'b', 'c'], 42)(obj)).toEqual({ a: { b: { c: 42 } } })
})

test('overrides any value defined in object, if it\'s key provided in path', () => {
  const obj = { a: 1 }
  expect(assocPath(['a', 'b', 'c'], 42, obj)).toEqual({ a: { b: { c: 42 } } })
})

test('makes shallow copy of object, not copying by ref, internal properties is ref-copied', () => {
  const obj = { a: { b: 0 }, c: {} }
  const newObj = assocPath(['a', 'b'], 42, obj)
  expect(obj === newObj).toBeFalsy()
  expect(obj.c === newObj.c).toBeTruthy()
})
