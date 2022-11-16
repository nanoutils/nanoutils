import { expectNumberOfArgs } from '../../cjs/_internal/_test'
import assoc from '../../cjs/assoc'
import assocPath from '../../cjs/assocPath'

test('it accepts exact 3 arguments', () => {
  expectNumberOfArgs(assocPath, 3, [['d', 'c'], 42, { d: { c: 0 } }])
})

test('creates nesting object associated with given path and places given value into its tail', () => {
  const obj = { a: { b: { c: 0 } } }
  expect(assocPath(['a', 'b', 'c'], 42, obj)).toEqual({ a: { b: { c: 42 } } })
  expect(assocPath(['a', 'b', 'c'])(42, obj)).toEqual({ a: { b: { c: 42 } } })
  expect(assocPath(['a', 'b', 'c'])(42)(obj)).toEqual({ a: { b: { c: 42 } } })
  expect(assocPath(['a', 'b', 'c'], 42)(obj)).toEqual({ a: { b: { c: 42 } } })
})

test('overrides any value defined in an object, if its key provided in path', () => {
  const obj = { a: 1 }
  expect(assocPath(['a', 'b', 'c'], 42, obj)).toEqual({ a: { b: { c: 42 } } })
})

test('overrides any value defined in an array, if its key provided in path', () => {
  const array = [1]
  expect(assocPath([0, 0, 0], 42, array)).toEqual([[[42]]])
})

test('makes shallow copy of an object, not copying by ref, internal properties is ref-copied', () => {
  const obj = { a: { b: 0 }, c: {} }
  const newObj = assocPath(['a', 'b'], 42, obj)
  expect(obj === newObj).toBeFalsy()
  expect(obj.c === newObj.c).toBeTruthy()
})

test('makes shallow copy of an array, not copying by ref, internal properties is ref-copied', () => {
  const array = [[[0]], []]
  const newArray = assocPath([0, 0], 42, array)
  expect(array === newArray).toBeFalsy()
  expect(array.c === newArray.c).toBeTruthy()
})

test.only('works same as assoc if an array consists of one element', () => {
  const array = [[1], [2]]

  const v1 = assoc(0, [2], array)
  const v2 = assocPath([0], [2], array)

  expect(v1).toEqual([[2], [2]])
  expect(v2).toEqual(v1)
})
