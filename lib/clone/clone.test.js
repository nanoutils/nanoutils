import { expectNumberOfArgs } from '../_internal/_test'
import __ from '../__'
import clone from '.'

test('it accepts exact 1 argument', () => {
  expectNumberOfArgs(clone, 1, [new Date()])
})

test("doesn't clone function", () => {
  var a = function b() {}
  expect(clone(a)).toBe(a)
})

test("doesn't clone placeholder", () => {
  var a = __
  expect(clone(a)).toBe(__)
})

test('clones Date object', () => {
  var a = new Date()
  var b = clone(a)
  b.setHours(15)
  expect(b).not.toBe(a)
})

test('clones RegExp', () => {
  var a = new RegExp()
  var b = clone(a)
  expect(b).not.toBe(a)
})

test('clones Array with nested data', () => {
  var a = [1, 'hello', [null, 'lalka']]
  var b = clone(a)
  b[2][0] = 'mutated'
  expect(a[2][0]).toBeNull()
  b = b.map(i => 'mutated')
  expect(a.every(i => i !== 'mutated')).toBeTruthy()
})

test('clones Object with nested data', () => {
  var a = { a: 1, b: { c: 1, d: [1, 2, 3] } }
  var cloneA = { a: 1, b: { c: 1, d: [1, 2, 3] } }
  var b = clone(a)
  b.a = 2
  b.b.c = 'asdf'
  b.b.d[1] = 4
  expect(a).toEqual(cloneA)
})

test('clones circular data', () => {
  var a = { foo: 'bar' }
  a.baz = a
  var b = { foo: 'bar' }
  b.baz = b
  expect(clone(a)).toEqual(b)
})

test('clones classes instances', () => {
  var A = function(a) {
    this.a = a
  }
  var a = new A(1)
  var b = clone(a)
  expect(b).toEqual(a)
  expect(b instanceof A).toBeTruthy()
})
